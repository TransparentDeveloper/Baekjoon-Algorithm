import java.util.Arrays;
class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int[] total = new int[n+1];
        Arrays.fill(total, 1);
        
        for(int lo: lost)
            total[lo] -=1;
        for(int re: reserve)
            total[re] +=1;
        
        int answer = 0;
        for(int i=1;i<n+1;i++){
            if(total[i]==0){
                if(total[i-1] == 2){
                    total[i]++;
                    total[i-1]--;
                }
                
                else if( i!=n && total[i+1] == 2){
                    total[i]++;
                    total[i+1]++;
                }
            }
            if(total[i]>=1)
                answer++;
        }
        if(total[n]==0 && total[n-1]==2)
            answer++;
        return answer;
    }
}
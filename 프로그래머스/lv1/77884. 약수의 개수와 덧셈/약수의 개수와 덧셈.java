class Solution {
    public int solution(int left, int right) {
        int answer =0;
        for(int i = left; i<=right;i++){
            if(doPlus(i)) answer+=i;
            else answer-=i;
        }
        return answer;
    }
    
    public boolean doPlus(int su){
        int cnt=0;
        for(int i=1; i<=su ;i++)
            if(su%i==0) cnt++;
        return cnt%2==0 ? true: false;
    }
}
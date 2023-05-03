import java.util.*;
class Solution
{
    public int solution(int []A, int []B){
        
        List<Integer> AList = new ArrayList<>();
        List<Integer> BList = new ArrayList<>();
        
        for(int i=0; i<A.length;i++){
            AList.add(A[i]);
            BList.add(B[i]);
        }
                
        Collections.sort(AList);
        Collections.sort(BList, Collections.reverseOrder());
        
        int answer = 0;
        
        for(int i=0; i< AList.size(); i++){
            answer += AList.get(i) * BList.get(i);
        }
        
        return answer; 
    }
}
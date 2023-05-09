import java.util.*;
class Solution {
    public int solution(int N, int number) {
        List<Set<Integer>> count = new ArrayList<>();
        
        for(int i=0; i<9; i++){
            count.add(new HashSet<>());
        }
        
        count.get(1).add(N);
        
        for(int i=2; i<9; i++){
	        Set<Integer> countSet = count.get(i);
            
            for(int j=1;j<i;j++){
                Set<Integer> preSet = count.get(j);
		        Set<Integer> postSet = count.get(i - j);
                
                for(int pre: preSet){
                    for(int post: postSet){
                        countSet.add(pre+post);
                        countSet.add(pre-post);
                        countSet.add(pre*post);
                        
                        if(pre !=0 && post != 0)
                            countSet.add(pre/post);
                    }
                }
            }
            countSet.add(Integer.parseInt(String.valueOf(N).repeat(i)));
        }
        for(int i=1; i<9;i++){
            for(int s: count.get(i)){
                if(s == number)
                    return i;
            }
        }
        return -1;
    }
}
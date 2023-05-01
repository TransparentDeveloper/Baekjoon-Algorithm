import java.util.*;
class Solution {
    
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        int idx=0;
        for(int[] com: commands){
            List<Integer> list = new ArrayList<>();
            
            int start = com[0]-1;
            int last = com[1];
            int su = com[2]-1;
            
            for(int i=start; i<last;i++)
                list.add(array[i]);
            
            list.sort(Comparator.naturalOrder());
            answer[idx++] = list.get(su);
        }
        
        return answer;
    }
}
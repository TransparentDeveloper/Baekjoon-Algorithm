import java.util.*;

class Solution {
    public int solution(int[][] sizes) {
        int[] w = new int[sizes.length];
        int[] h = new int[sizes.length];
        
        int idx = 0;
        for(int[] size: sizes){
            if(size[0] >= size[1]){
                w[idx] = size[0];
                h[idx] = size[1];
            }else{
                w[idx] = size[1];
                h[idx] = size[0];
            }

            idx++;
        }
        
        int answer = 
            (Arrays.stream(w).max().getAsInt()) *
            (Arrays.stream(h).max().getAsInt());
        
        return answer;
    }
}
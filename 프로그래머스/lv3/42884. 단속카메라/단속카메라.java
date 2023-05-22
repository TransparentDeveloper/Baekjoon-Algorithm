import java.util.*;
class Solution {
    public int solution(int[][] routes) {
        Arrays.sort(routes, (o1,o2) -> o1[1]-o2[1]);
        
        int cam = Integer.MIN_VALUE;
        int answer = 0;
        
        for(int[] route : routes) {
            if(cam < route[0]) {
                cam = route[1];
                answer++;
            }
        }
        
        return answer;
    }
}
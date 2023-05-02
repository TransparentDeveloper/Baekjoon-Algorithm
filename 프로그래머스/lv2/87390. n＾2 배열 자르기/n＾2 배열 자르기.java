import java.util.*;
class Solution {
    public int[] solution(int n, long left, long right) {
        List<Long> list = new ArrayList<>();
        for(long k=left; k<=right;k++)
            list.add(Math.max(k/n,k%n)+1);
        
        int[] answer = new int[(int)(right-left)+1];
        int idx=0;
        for(Long elem: list)
            answer[idx++] = Long.valueOf(elem).intValue();
        
        return answer;
    }
}
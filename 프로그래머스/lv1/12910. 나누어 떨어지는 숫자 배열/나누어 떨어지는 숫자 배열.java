import java.util.*;
class Solution {
    public int[] solution(int[] arr, int divisor) {
        List<Integer> list = new ArrayList<>();
        for(int ar: arr){
            if(ar%divisor==0)
                list.add(ar);
        }
        Collections.sort(list);
        return list.isEmpty() ? new int[]{-1} : list.stream().mapToInt(i->i).toArray();
    }
}
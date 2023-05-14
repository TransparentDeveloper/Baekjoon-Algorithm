import java.util.*;
class Solution {
    public int solution(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for(int num: nums){
            if(!map.containsKey(map))
                map.put(num,1);
            else
                map.replace(num,map.get(num)+1);
        }
        
        int cnt_kind = map.keySet().size();
        int cnt_get = nums.length/2;        
            
        return cnt_kind>cnt_get ? cnt_get : cnt_kind;
        
    }
}
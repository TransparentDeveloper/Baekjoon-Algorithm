import java.util.*;

class Solution {
    public String solution(String s) {
        String[] strs = s.split(" ");
        
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        
        for(String st : strs){
            min = Math.min(min, Integer.parseInt(st));
            max = Math.max(max, Integer.parseInt(st));
        }
        
        return min+" "+max;
    }
}
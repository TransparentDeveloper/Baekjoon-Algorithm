import java.util.*;
class Solution {
    public int solution(String[][] clothes) {
        Map<String, Integer> map = new HashMap<>();
        Set<String> set = new HashSet();
        
        for(String[] clothe: clothes){
            if(!map.containsKey(clothe[1]))
                map.put(clothe[1],1);  
            else
                map.replace(clothe[1],map.get(clothe[1])+1);
            set.add(clothe[1]);
        }
        int cnt = 1;
        for(String clo: set){
            cnt *= (map.get(clo)+1);
        }
        return cnt -1; 
    }
}
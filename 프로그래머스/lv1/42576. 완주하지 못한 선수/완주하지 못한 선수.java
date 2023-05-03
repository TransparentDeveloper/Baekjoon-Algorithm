import java.util.*;
class Solution {
    public String solution(String[] participant, String[] completion) {
        Map<String,Integer> map = new HashMap<>();
        
        for(String part: participant){
            
            if(!map.containsKey(part)){
                map.put(part,1);
            }
            else{
                map.replace(part,map.get(part)+1);
            }
        }
        
        for(String com: completion){
            if(map.get(com)-1 == 0)
                map.remove(com);
            else
               map.replace(com,map.get(com)-1);
        }
        List<String> answer = new ArrayList<>(map.keySet());
        return answer.get(0);
    }
}
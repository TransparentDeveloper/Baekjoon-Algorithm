import java.util.*;

class Solution {
    public String solution(String[] survey, int[] choices) {
        Map<String,Integer> map = new HashMap<>();
        
        map.put("R",0);map.put("C",0);map.put("J",0);map.put("A",0);
        map.put("T",0);map.put("F",0);map.put("M",0);map.put("N",0);
        
        for(int i =0; i<choices.length ; i++){
            String type2 = survey[i].split("")[0];
            String type1 = survey[i].split("")[1];
            
            if (choices[i] == 4){
                continue;
            }
            else if(choices[i]>4){
                map.replace(type1, map.get(type1) + choices[i] - 4);
            }
            else if(choices[i]<4){
                map.replace(type2, map.get(type2) + 4 - choices[i]);
            }            
        }
        StringBuilder sb = new StringBuilder();
        
        // R, T 검사
        if (map.get("R") >= map.get("T")) sb.append("R");
        else sb.append("T");
        
        // C, F 검사
        if (map.get("C") >= map.get("F")) sb.append("C");
        else sb.append("F");
        
        // J, M 검사
        if (map.get("J") >= map.get("M")) sb.append("J");
        else sb.append("M");
        
        // A, N 검사
        if (map.get("A") >= map.get("N")) sb.append("A");
        else sb.append("N");
        
        return sb.toString();
    }
}
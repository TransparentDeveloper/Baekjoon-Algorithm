import java.util.*;
class Solution {
    public int solution(int cacheSize, String[] cities) {
        Map<String,Integer> map = new HashMap<>(); // 호출되는 카운트
        List<String> list = new ArrayList<>(); // key 
        
        int answer = 0;
        int idx = 0;
        for(String city: cities){
            idx++;
            city = city.toLowerCase();
            if(!map.containsKey(city)){
                map.put(city,idx);
                list.add(city);
                answer+=5;
            }
            else{
                boolean check = false;
                for(int i=0; i<cacheSize ; i++){
                    if(city.equals(list.get(i))){
                        check = true;
                        break;
                    }
                }
                answer += check ? 1:5;
                map.replace(city, idx);    
            }
            //정렬
            Collections.sort(list, (o1,o2) -> Integer.compare(map.get(o2),map.get(o1)));
            
        }
        
        return answer;
    }
}
import java.util.*;
class Solution {
    public int[] solution(String s) {
        //Map 으로 하자
        Map<String,Integer> map = new HashMap<>();
        
        String[] chr = s.split("");
        List<Integer> list = new ArrayList<>();
        
        
        int idx=0;
        for(String c : chr){
            if(map.containsKey(c)) // key 가 있다면 인덱스를 결과에 저장하고 인덱스 갱신
            {   
                list.add(idx - map.get(c));
                map.replace(c,idx);
            }
            else// key 가 없다면 인덱스를 -1 를 결과에 저장하고 인덱스 저장
            {   
                list.add(-1);
                map.put(c,idx);
            }
            idx ++;
        }
        
        
        return list.stream().mapToInt(i->i).toArray();   
    }
}
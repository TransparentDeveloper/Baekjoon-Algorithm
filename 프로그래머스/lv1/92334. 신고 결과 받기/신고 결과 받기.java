import java.util.*;

class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
        
        Map<String, Set<String>> map = new HashMap<>();
        Map<String,Integer> email = new HashMap<>();
        
        for(String user: id_list){
            map.put(user, new HashSet<>());
            email.put(user,0);
        }
        
        for(String repo: report){
            String from = repo.split(" ")[0];
            String to = repo.split(" ")[1];
            
            Set set = map.get(to);
            set.add(from);
            map.replace(to, set);
        }
        
    
        for(String user: id_list){
            if(map.get(user).size() >= k){
                Set set = map.get(user);
                
                Iterator<String> iter = set.iterator();
                while(iter.hasNext()){
                    String id = iter.next();
                    email.replace(id,email.get(id)+1);
                }                
            }
        }
        
        int[] answer = new int[id_list.length];
        int idx =0;
        for(String user: id_list)
            answer[idx++] =email.get(user);
        
    
        return answer;
    }
}
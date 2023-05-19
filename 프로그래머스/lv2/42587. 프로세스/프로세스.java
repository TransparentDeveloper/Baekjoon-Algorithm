import java.util.*;
class Solution {
    public int solution(int[] priorities, int location) {
        
        Queue<Custom> q = new LinkedList<>();
        for(int i=0; i<priorities.length; i++){
            q.offer(new Custom(i,priorities[i]));
        }
        
        List<Integer> list = new ArrayList<>();
        for(int pri: priorities)
            list.add(pri);   
        Collections.sort(list, Collections.reverseOrder());
        int answer = 0;
        while(!q.isEmpty()){
            Custom now = q.poll();
            if(now.pri == list.get(0) && now.ord == location){
                answer ++;
                break;
            }else if(now.pri == list.get(0)){
                answer++;
                list.remove(0);
            }
            else{
                q.offer(now);
            }
            
        }
        
        return answer;
    }
    
    class Custom{
        int ord;
        int pri;
        Custom(int ord,int pri){
            this.ord=ord; this.pri=pri;
        }
    }
}
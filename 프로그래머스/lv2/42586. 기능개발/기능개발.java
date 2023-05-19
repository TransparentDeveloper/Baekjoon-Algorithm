import java.util.*;
class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        
        int curVer =0;
        int cnt=0;
        List<Integer> list  = new ArrayList<>();
        while(true){
            for(int i=0; i< progresses.length; i++){
                progresses[i] += speeds[i];
            }
            if(progresses[curVer] >=100){
                cnt=0;
                while(curVer < progresses.length &&progresses[curVer] >=100){
                    curVer ++;
                    cnt++;
                }
                list.add(cnt);
            }
            if(curVer == progresses.length){
                break;
            }
            
        }
        return list.stream().mapToInt(i->i).toArray();
    }
}
import java.util.*;

class Solution {
    public int[] solution(String[] wallpaper) {
        int lux,luy,rdx,rdy;
        lux = luy = rdx = rdy = -1;
        
        // x 찾기
        int idx=0;
        List<Integer> list = new ArrayList<>();
        for(String wall:wallpaper){
            if(wall.contains("#"))  
                list.add(idx);
            idx++;
        }
        lux = list.get(0);
        rdx = list.get(list.size()-1)+1;
        
        // y 찾기
        list = new ArrayList<>();
        for(String wall:wallpaper){
            if(wall.contains("#")){
                int colIdx = 0;
                String[] chs = wall.split("");
                for(String c: chs){
                    if(c.equals("#"))
                        list.add(colIdx);
                    colIdx++;   
                }
            }
        }
        
        Collections.sort(list);
        luy = list.get(0);
        rdy = list.get(list.size()-1)+1;
        
        
        return new int[]{lux,luy,rdx,rdy};
    }
}
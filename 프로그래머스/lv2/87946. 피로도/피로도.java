import java.util.*;
class Solution {
    int[][] gDungeons;
    boolean[] isVisited;
    int result = 0;
    
    public int solution(int k, int[][] dungeons) {
        gDungeons = dungeons;
        isVisited = new boolean[dungeons.length];
        dfs(k,0,0);
        
        return result;
    }
    
    public void dfs(int k, int answer, int cnt){
        
        if(cnt == gDungeons.length){
            result = answer > result ? answer : result;
            return;
        }
        
        for(int i=0; i<gDungeons.length;i++){
            if(k >= gDungeons[i][0] && !isVisited[i]){
                
                isVisited[i] = true;
                // 간다.
                dfs(k - gDungeons[i][1], answer+1, cnt+1 );
                isVisited[i] = false;
                // 안간다.
                dfs(k, answer, cnt+1 );
            }
        }

            
    }
}
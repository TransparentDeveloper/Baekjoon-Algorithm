import java.util.*;
class Solution {
    
    int[][] g_maps;
    int n;
    int m;
        
    int[] dx = {1,-1,0,0};
    int[] dy = {0,0,1,-1};
    
    public int solution(int[][] maps) {
        g_maps = maps;
        n = g_maps.length;
        m = g_maps[0].length;
        return bfs();
    }
    
    public int bfs(){
        Queue<Custom> q = new LinkedList<>();
        q.offer(new Custom(0,0,1));
        g_maps[0][0] = 0;
        
        while(!q.isEmpty()){
            Custom pol = q.poll();
            int row = pol.row;
            int col = pol.col;
            int cost = pol.cost;
            
            for(int i=0; i<4;i++){
                if(row+dx[i]<0||col+dy[i]<0||row+dx[i]>=n||col+dy[i]>=m)
                    continue;
                
                if( row+dx[i] == n-1&& col+dy[i]== m-1){
                    return cost+1;
                }
                if(g_maps[row+dx[i]][col+dy[i]] == 1){
                    g_maps[row+dx[i]][col+dy[i]] = 0;
                    q.offer(new Custom(row+dx[i],col+dy[i],cost+1));
                }
            }
        }
        
        return -1;
    }
    
    class Custom{
        int row;
        int col;
        int cost;
        
        public Custom(int row, int col ,int cost){
            this.row = row;
            this.col = col;
            this.cost = cost;
        }
    }
}
import java.util.*;
class Solution {
    boolean[][] gConnect; 
    
    public int solution(int n, int[][] wires) {
        boolean[][] connect = new boolean[n+1][n+1];

        for(int[] wire: wires){
            connect[wire[0]][wire[1]] = true;
            connect[wire[1]][wire[0]] = true;
        }
        
        int answer = 10000;
        // 하나씩 끊고 bfs 로 보낸다.
        for(int[] wire: wires){
            connect[wire[0]][wire[1]] =false;
            connect[wire[1]][wire[0]] =false;
            gConnect = connect;
            answer = Math.min(2*bfs(n,wire[0])-n,answer);
            connect[wire[0]][wire[1]] =true;
            connect[wire[1]][wire[0]] =true;
        }
        
        return answer;
    }
    
    public int bfs(int n,int start){
        Queue<Integer> q = new LinkedList<>();
        boolean[][] visited = new boolean[n+1][n+1];
        q.add(start);
        int res = 1;
        while(!q.isEmpty()){
            int vertex = q.poll();
            
            for(int i=1; i< n+1;i++)
                if(gConnect[vertex][i] && !visited[vertex][i]){
                    visited[vertex][i] = true;
                    visited[i][vertex] = true;
                    q.add(i);
                    res ++;
                }
        }
        
        return Math.max(res,n-res);
    }
}
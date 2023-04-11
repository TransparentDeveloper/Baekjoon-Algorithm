import java.util.Arrays;

class Solution {
    public int solution(int n, int s, int a, int b, int[][] fares) {
        
        int[][] graph = new int[n+1][n+1];
        for(int i=1; i< n+1;i++){
            Arrays.fill(graph[i],20000000);
            graph[i][i] = 0;
        }
        int start;
        int end;
        int fare;
        int num_path = fares.length;

        for(int i=0; i< num_path;i++){
            start = fares[i][0];
            end = fares[i][1];
            fare = fares[i][2];
            graph[start][end] = fare;
            graph[end][start] = fare;
        }
        for(int k=1; k< n+1;k++){
            for(int j =1; j<n+1;j++){
                for(int i =1; i< n+1; i++){
                    graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
                    graph[j][i] = graph[i][j];
                }
            }
        }
       int result = graph[s][a] + graph[s][b];
        for(int i=1;i<n+1;i++) {
            if(i == s)
                continue;
            result = Math.min(result, graph[s][i] + graph[i][a] + graph[i][b]);
        }
        return result;
    }
}
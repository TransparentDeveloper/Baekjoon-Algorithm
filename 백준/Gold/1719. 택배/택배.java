import java.io.*;
import java.sql.SQLOutput;
import java.util.*;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine()," ");

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());


        int[][] graph = new int[n+1][n+1];
        int[][] pointMap = new int[n+1][n+1];

        for (int i = 1; i <= n; i++) {
            Arrays.fill(graph[i],100001);
        }

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                pointMap[i][j] = j;
            }
        }

        int s,e,w;
        s=e=w=0;
        for(int i=0; i<m;i++){
            st = new StringTokenizer(br.readLine()," ");
            s=Integer.parseInt(st.nextToken());
            e=Integer.parseInt(st.nextToken());
            w=Integer.parseInt(st.nextToken());
            graph[e][s]=graph[s][e] = Math.min(w,graph[s][e]);
        }

        for(int k=1; k<n+1;k++){
            for(int i=1; i<n+1;i++){
                for(int j=1;j<n+1;j++){
                    if(graph[i][j]>graph[i][k]+graph[k][j]) {
                        graph[i][j] = graph[i][k] + graph[k][j];
                        pointMap[i][j] = pointMap[i][k];
                    }
                }
            }
        }

        StringBuilder sb = new StringBuilder();

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == j) {
                    sb.append('-').append(' ');
                    continue;
                }
                sb.append(pointMap[i][j]).append(' ');
            }
            sb.append('\n');
        }

        System.out.print(sb);

    }
}

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static int[][] graph;
    static boolean[][] visited;
    static int[] dx = {0,1,1,1,0,-1,-1,-1};
    static int[] dy = {1,1,0,-1,-1,-1,0,1};
    static int N;
    static int M;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        graph = new int[N+1][M+1];
        visited = new boolean[N+1][M+1];

        for(int row=1; row<N+1; row++){
            st = new StringTokenizer(br.readLine());
            for(int col=1; col<M+1; col++){
                graph[row][col] = Integer.parseInt(st.nextToken());
            }
        }

        // 상어가 없는 모든 위치에서 각각 안전거리를 구하고
        // 최댓값을 갱신한다.
        int max_dis = 0;
        int distance = 0;
        for(int row=1; row<N+1; row++){
            for(int col=1; col<M+1; col++){
                if(graph[row][col]==1){
                    col++;
                    distance=1;
                }
                else
                    distance = bfs(row, col);

                max_dis = (max_dis < distance) ? distance : max_dis ;
            }
        }
        System.out.println(max_dis);
    }

    public static int bfs(int y, int x){
        visited = new boolean[N+1][M+1];
        Queue<Custom> q = new LinkedList<>();
        q.add(new Custom(y,x,0));

        while(!q.isEmpty()){
            Custom custom = q.poll();
            int ny = custom.y;
            int nx = custom.x;
            int nCount = custom.count;

            for(int i=0; i<8; i++){
                //1.영역을 벗어날 경우
                if(ny+dy[i]<=0 || ny+dy[i]>N||
                        nx+dx[i]<=0 || nx+dx[i]>M)
                    continue;
                    //2.이미 지나 온 길인 경우
                else if(visited[ny+dy[i]][nx+dx[i]])
                    continue;
                    //3.상어가 있을 경우, (현재까지 온 거리 + 1) 반환
                else if(graph[ny+dy[i]][nx+dx[i]] == 1)
                    return nCount + 1;
                    //4. 위의 경우가 모두 아니라면, q에 넣고 그 이웃을 다시 탐색(거리는 1증가)
                else {
                    q.add(new Custom(ny + dy[i], nx + dx[i], nCount + 1));
                    visited[ny + dy[i]][nx + dx[i]] = true;
                }
            }
        }
        return 0;
    }
    static public class Custom{
        int y;int x;int count;
        public Custom(int y, int x, int count) {
            this.y = y;
            this.x = x;
            this.count = count;
        }
    }
}
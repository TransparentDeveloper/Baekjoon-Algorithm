import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static int[][] graph;
    static int N,M;
    static int[] dx = {0,0,-1,1};
    static int[] dy = {1,-1,0,0};
    static Queue<Pairs> q = new LinkedList<>();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        graph = new int[N+1][M+1];
        for(int row=1; row<N+1;row++) {
            String str = br.readLine();
            for (int col = 1; col < M + 1; col++) {
                graph[row][col] = str.charAt(col-1) - '0';
            }
        }
        bfs(1,1);
        System.out.println(graph[N][M]);
    }
    public static void bfs(int nx, int ny){
        if(nx == M && ny == N)
            return;

        for(int i=0; i<4;i++){
            if(nx+dx[i]<=0 || nx+dx[i] > M || ny+dy[i]<=0 || ny+dy[i] > N) // 1. 그래프 영역을 벗어 났을 때.
                continue;
            if(ny+dy[i] == 1 && nx+dx[i] == 1)// 2. (1,1)로 돌아갈 경우
                continue;
            if(graph[ny+dy[i]][nx+dx[i]] != 1)// 3. (1,1) 외 왔던 길을 되돌아 갈 경우 && 0인 곳으로 갈 경우
                continue;
            q.add(new Pairs(nx+dx[i], ny+dy[i]));
            graph[ny+dy[i]][nx+dx[i]] = graph[ny][nx] + 1;
        }
        while(!q.isEmpty()){
            Pairs pairs = q.poll();
            bfs(pairs.getX(),pairs.getY());
        }
    }
    static class Pairs{
        private int x;
        private int y;
        public Pairs(int x, int y) {
            this.x = x;
            this.y = y;
        }
        public int getX() {
            return x;
        }
        public int getY() {
            return y;
        }
    }
}
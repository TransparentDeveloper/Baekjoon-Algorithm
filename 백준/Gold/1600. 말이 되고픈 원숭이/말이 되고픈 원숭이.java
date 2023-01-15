import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static int[] horse_x = {-2,-1,1,2,2,1,-1,-2};
    static int[] horse_y = {1,2,2,1,-1,-2,-2,-1};
    static int[] monkey_x = {-1,0,1,0};
    static int[] monkey_y ={0,1,0,-1};
    static boolean[][][] visited;

    static int[][] graph;
    static int K;
    static int W;
    static int H;

    static Queue<Attempt> q = new LinkedList<>();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        K = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(br.readLine());
        W = Integer.parseInt(st.nextToken());
        H = Integer.parseInt(st.nextToken());

        graph = new int[H+1][W+1];
        visited = new boolean[H+1][W+1][K+1];

        for(int row = 1 ; row < H+1; row++){
            st = new StringTokenizer(br.readLine());
            for(int col = 1; col < W+1; col++){
                graph[row][col]= Integer.parseInt(st.nextToken());
            }
        }
        visited[1][1][K] = true;
        System.out.println(bfs(1,1,K));

    }

    static int bfs(int x , int y, int chance){
        q.add(new Attempt(x,y,chance,0));

        while(!q.isEmpty()){
            Attempt p = q.poll();
            int nx = p.getX();
            int ny = p.getY();
            int nChance = p.getChance();
            int nCount = p.getCount();

            if(nx == W && ny == H)
                return nCount;

            // 1. 그냥 원숭이 스탭으로 이동한다.
            for(int i=0; i< 4;i++){
                // 1-1. 밖으로 나가버리는 경우
                if( nx + monkey_x[i] <= 0 || ny + monkey_y[i] <=0 ||
                        nx + monkey_x[i] > W || ny + monkey_y[i] >H )
                    continue;
                // 1-2. 도착지점에 장애물이 있는 경우
                if( graph[ny + monkey_y[i]][nx + monkey_x[i]] == 1)
                    continue;
                // 1-3. 도착지점에 이미 같은 말찬스 기회를 가진 경우가 이미 지나간 경우
                if(visited[ny + monkey_y[i]][nx + monkey_x[i]][nChance])
                    continue;
                q.add(new Attempt(nx+monkey_x[i],ny+monkey_y[i],nChance,nCount+1));
                visited[ny + monkey_y[i]][nx + monkey_x[i]][nChance] = true;
            }

            //2. 말 찬스가 남아있다.
            if(nChance>0){
                for(int i=0; i<8; i++){
                    // 2-1. 밖으로 나가버리는 경우
                    if( nx + horse_x[i] <= 0 || ny + horse_y[i] <=0 ||
                    nx + horse_x[i] > W || ny + horse_y[i] >H )
                        continue;

                    // 2-2. 도착지점에 장애물이 있는 경우
                    if( graph[ny + horse_y[i]][nx + horse_x[i]] == 1)
                        continue;
                    // 2-3. 도착지점에 이미 같은 말찬스 기회를 가진 경우가 이미 지나간 경우
                    if(visited[ny + horse_y[i]][nx + horse_x[i]][nChance-1])
                        continue;
                    q.add(new Attempt(nx + horse_x[i],ny + horse_y[i],nChance-1,nCount+1));
                    visited[ny + horse_y[i]][nx + horse_x[i]][nChance-1] = true;
                }
            }
        }
        return -1;
    }

    static class Attempt {
        private int x;
        private int y;
        private int chance;
        private int count;

        public int getX() {
            return x;
        }

            public int getY() {
            return y;
        }

        public int getChance() {
            return chance;
        }
        public int getCount() {
            return count;
        }

        public Attempt(int x, int y, int chance,int count) {
            this.x = x;
            this.y = y;
            this.chance = chance;
            this.count = count;
        }
    }
}
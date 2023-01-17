import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    private static int s;
    private static boolean[][] visited;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        s = Integer.parseInt(br.readLine());
        visited = new boolean[s*5][s*5];

        int monitor = 1;
        int clipboard = 0;

        System.out.println(bfs(monitor,clipboard));
    }

    public static int bfs(int monitor, int clipboard){
        Queue<Bag> q= new LinkedList<>();
        q.add(new Bag(monitor,clipboard,1));
        visited[monitor][clipboard]=true;

        while(!q.isEmpty()){
            Bag bag = q.poll();
            int nm = bag.monitor;
            int nb = bag.board;
            int nCount = bag.count;

            int save_nm = nm;
            int save_nb = nb;

            for(int i=0; i<3;i++){
                nm = save_nm;
                nb = save_nb;
                switch (i){
                    case 0:
                        nm = removeOneOnMonitor(nm);
                        break;
                    case 1:
                        nb = copyFromMonitorToBoard(nm,nb);
                        break;
                    case 2:
                        nm = copyFromBoardToMonitor(nm,nb);
                        break;
                    default:
                }
                if(nm<=0||nb<0)
                    continue;
                if(visited[nm][nb])
                    continue;
                if(nm == s)
                    return nCount;

                q.add(new Bag(nm,nb,nCount+1));
                visited[nm][nb]=true;
            }
        }

        return -1;
    }
    public static class Bag{
        int monitor;
        int board;
        int count;

        public Bag(int monitor, int board, int count) {
            this.monitor = monitor;
            this.board = board;
            this.count = count;
        }
    }

    public static int removeOneOnMonitor(int monitor){
        return (monitor-1);
    }
    public static int copyFromMonitorToBoard(int monitor, int board){
        if(monitor < board)
            return board;
        else{
            return monitor;
        }
    }
    public static int copyFromBoardToMonitor(int monitor, int board){
        return monitor+board;
    }
}
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class Main {
    static boolean[][] connected;
    static Set<Integer> set= new HashSet<>();
    static int node;
    static int edge;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        node = Integer.parseInt(br.readLine());
        edge = Integer.parseInt(br.readLine());
        connected = new boolean[node+1][node+1];

        StringTokenizer st;
        int num1,num2;

        for(int i=0; i<edge;i++){
            st = new StringTokenizer(br.readLine());
            num1 = Integer.parseInt(st.nextToken());
            num2 = Integer.parseInt(st.nextToken());
            connected[num1][num2]=true;
            connected[num2][num1]=true;
        }
        dfs(1);
        System.out.println(set.size()-1);
    }
    static void dfs(int start) {
        set.add(start);
        for(int col=1;col<node+1;col++){
            if(connected[start][col]) {
                connected[start][col] = false;
                connected[col][start] = false;
                dfs(col);
            }
        }
    }
}
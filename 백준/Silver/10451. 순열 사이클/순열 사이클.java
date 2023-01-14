import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int[] elem;
    static boolean[] check;
    static int num;
    static int res;
    static StringBuilder sb = new StringBuilder();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int testcase = Integer.parseInt(st.nextToken());

        for (int i=0; i<testcase;i++) {
            res = 0;
            num = Integer.parseInt(br.readLine());
            StringTokenizer str = new StringTokenizer(br.readLine());
            elem = new int[num+1];
            check = new boolean[num+1];

            for(int j=1; j<num+1;j++)
                elem[j] = Integer.parseInt(str.nextToken());

            for(int node=1; node<num+1;node++){
                if(!check[node]) {
                    dfs(node);
                    res += 1;
                }
            }
            sb.append(res+"\n");
        }
        System.out.println(sb);
    }

    public static int dfs(int node){
        check[node] = true;
        if(!check[elem[node]]){
            dfs(elem[node]);
        }
        return 1;
    }


}

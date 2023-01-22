import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int[] p = new int[N+1];

        st = new StringTokenizer(br.readLine());
        for(int i=1; i< N+1;i++){
            p[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(p);

        int result=0;
        for(int i=1; i<N+1;i++){
            p[i] += p[i-1];
            result += p[i];
        }
        System.out.println(result);
    }
}
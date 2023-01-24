import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args)  throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] length = new int[N-1];
        int[] cost = new int[N-1];

        StringTokenizer st = new StringTokenizer(br.readLine());
        int leaving = 0;
        for(int i=0; i<N-1;i++){
            length[i] = Integer.parseInt(st.nextToken());
            leaving += length[i];
        }

        st = new StringTokenizer(br.readLine());
        for(int i=0; i<N-1;i++){
            cost[i] = Integer.parseInt(st.nextToken());
        }

        int result=0;

        for(int i=0; i<N-1;i++){
            int j=i;
            while(j< N-1 && cost[i]<= cost[j]){
                result += (length[j]*cost[i]);
                j++;
            }
            i=j-1;
        }

        System.out.println(result);
    }
}
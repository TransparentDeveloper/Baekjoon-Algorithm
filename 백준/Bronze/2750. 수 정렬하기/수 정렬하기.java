import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] cnt = new int[2001];

        int temp;
        for(int i=0; i< N;i++){
            temp = Integer.parseInt(br.readLine());
            // [-1000 , -1] -> [0 , 999]
            // [0, 1000] -> [1000, 2000]
            temp += 1000;
            cnt[temp]++;
        }
        br.close();

        StringBuilder sb = new StringBuilder();
        for(int i=0; i<2001;i++){
            if(cnt[i]==0)
                continue;
            sb.append(i-1000).append('\n');
        }
        System.out.println(sb);
    }
}
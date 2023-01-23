import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] cnt = new int[10001];

        int max_num=0;
        int temp;
        for(int i=0; i< N;i++){
            temp = Integer.parseInt(br.readLine());
            cnt[temp]++;
            max_num = (max_num >= temp) ? max_num : temp;
        }
        br.close();

        StringBuilder sb = new StringBuilder();

        for(int i=1; i <= max_num;i++){
            while(cnt[i]-->0)
                sb.append(i).append('\n');
        }
        System.out.println(sb);
    }
}
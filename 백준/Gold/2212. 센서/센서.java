import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args)  throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int K = Integer.parseInt(br.readLine());
        int[] sensor = new int[N];
        StringTokenizer st = new StringTokenizer(br.readLine());
        br.close();

        for(int i=0; i<N;i++)
            sensor[i] = Integer.parseInt(st.nextToken());
        Arrays.sort(sensor);

        Integer[] dis_near = new Integer[N-1];
        for(int i=0; i<N-1;i++)
            dis_near[i] = sensor[i+1]-sensor[i];

        Arrays.sort(dis_near,Collections.reverseOrder());

        int result=0;
        for (Integer integer : dis_near) {
            if(--K>0)
                continue;
            result += integer;
        }

        System.out.println(result);
    }
}
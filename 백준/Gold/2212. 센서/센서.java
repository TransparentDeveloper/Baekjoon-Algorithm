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
        int[] dis_near = new int[N-1];
        StringTokenizer st = new StringTokenizer(br.readLine());
        br.close();

        for(int i=0; i<N;i++)
            sensor[i] = Integer.parseInt(st.nextToken());

        Arrays.sort(sensor);
        for(int i=0; i<N-1;i++)
            dis_near[i] = sensor[i+1]-sensor[i];

        List<Integer> list = Arrays.stream(dis_near).boxed().collect(Collectors.toList());
        Collections.sort(list,Collections.reverseOrder());

        int result=0;
        for (Integer integer : list) {
            if(--K>0)
                continue;
            result += integer;
        }

        System.out.println(result);
    }
}
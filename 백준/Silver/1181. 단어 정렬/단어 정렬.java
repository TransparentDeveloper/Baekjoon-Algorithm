import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        String[] strings = new String[N];
        for(int i=0; i<N; i++){
            strings[i] = br.readLine();
        }
        br.close();
        Arrays.sort(strings, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                if(o1.length() == o2.length())
                    return o1.compareTo(o2);
                return o1.length()-o2.length();
            }
        });
        StringBuilder sb = new StringBuilder();
        sb.append(strings[0]).append('\n');
        for(int i=1;i<N;i++){
            if(strings[i].equals(strings[i-1]))
                continue;
            sb.append(strings[i]).append('\n');
        }

        System.out.println(sb);
    }
}
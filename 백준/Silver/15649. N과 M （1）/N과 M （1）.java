import java.io.*;
import java.sql.SQLOutput;
import java.util.*;

class Main {
    static int N;
    static int M;
    static List<String> list = new ArrayList<>();
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine()," ");

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        백트랙킹("",0);
        for (String s : list) {
            System.out.println(s.trim());
        }
    }


    static void 백트랙킹(String s, int cnt){
        if(cnt == M) {// 출력 조건
            list.add(s);
            return;
        }

        for(int i=1; i<=N;i++)
            if(!s.contains(String.valueOf(i)))
                백트랙킹(s +" "+ String.valueOf(i), cnt+1);
        return;
    }
}

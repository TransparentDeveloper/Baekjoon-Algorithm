import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args)  throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(),"\\-");

        String str= st.nextToken();
        StringTokenizer stk = new StringTokenizer(str,"\\+");
        int result = 0;
        while(stk.hasMoreTokens()){
            result += Integer.parseInt(stk.nextToken());
        }
        int temp_res = 0;
        while(st.hasMoreTokens()){
            temp_res = 0;
            str = st.nextToken();
            stk = new StringTokenizer(str,"\\+");
            while(stk.hasMoreTokens()){
                temp_res += Integer.parseInt(stk.nextToken());
            }
            result -= temp_res;
        }

        System.out.println(result);
    }
}
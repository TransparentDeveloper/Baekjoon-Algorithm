import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args)  throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(),"\\-");

        Integer result =null;
        while(st.hasMoreTokens()){
            String str = st.nextToken();
            StringTokenizer stk = new StringTokenizer(str,"\\+");
            int tmp=0;
            while(stk.hasMoreTokens()){
                tmp += Integer.parseInt(stk.nextToken());
            }
            if(result == null){
                result = tmp;
            }else {
                result -= tmp;
            }
        }
        System.out.println(result);
    }
}
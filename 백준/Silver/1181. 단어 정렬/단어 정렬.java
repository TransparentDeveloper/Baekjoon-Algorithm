import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        // key 는 문자열 길이, value 는 key 만큼의 길이를 가지는 문자열 list
        Map<Integer,List<String>> hashMap = new HashMap<>();

        String str;
        for(int i=0; i< N; i++){
            str = br.readLine();
            // 같은 길이의 문자열이 이미 저장되어 있다면
            if(hashMap.containsKey(str.length())){
                List<String> stringList = hashMap.get(str.length());
                stringList.add(str);
                Collections.sort(stringList);
                hashMap.replace(str.length(),stringList);
            }
            // 특정 길이의 문자열이 map 안에 없다면
            else{
                List<String> stringList = new ArrayList<>();
                stringList.add(str);
                hashMap.put( str.length(),stringList);
            }
        }
        br.close();
        StringBuilder sb = new StringBuilder();
        for(int i=0; i<51;i++){
            if(hashMap.containsKey(i)){
                List<String> stringList = hashMap.get(i);
                stringList.stream().distinct().forEach(s->sb.append(s).append('\n'));
            }
        }
        System.out.println(sb);
    }
}
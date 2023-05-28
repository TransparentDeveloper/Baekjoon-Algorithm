import java.io.*;
import java.util.*;

class Main {
    static class Trie{
        Map<String, Trie> map = new TreeMap<>();
    }
    public static void main(String[] args) throws Exception {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());
        Trie root = new Trie();
        StringTokenizer st;

        for(int i=0; i<num;i++){
            st = new StringTokenizer(br.readLine(), " ");
            int su = Integer.parseInt(st.nextToken());
            Trie cur = root;

            for(int j=0; j<su; j++){
                String food = st.nextToken();
                if(!cur.map.containsKey(food)){
                    cur.map.put(food, new Trie());
                }
                cur = cur.map.get(food);
            }
        }
        print(root,"");


    }

    public static void print(Trie root, String bar){
        Object[] key = root.map.keySet().toArray();
        Arrays.sort(key);

        for (Object s : key){
            System.out.println(bar+s);
            print(root.map.get(s),bar+"--");
        }
    }
}
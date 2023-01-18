import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

//	13913
public class Main {
    private static int S;
    private static int K;
    private static int[] previous;
    private static boolean[] visited;


    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        S = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());
        previous = new int[100001];
        visited = new boolean[100001];

        StringBuilder sb = new StringBuilder();
        // 같은 위치
        if(K==S){
            sb.append(0+"\n");
            sb.append(K);
            System.out.println(sb);
        }
        // K가 S 뒤에 있을 때
        else if(K<S){
            //시간 출력
            sb.append(S-K + "\n");
            //경로 출력
            while(K<=S){
                sb.append(S-- +" ");
            }
            System.out.println(sb);
        }
        // K가 S 앞에 있을 때
        else
            bfs();
    }
    public static void bfs(){
        Queue<Integer> q= new LinkedList<>();
        q.add(S);
        previous[S] = -1;
        visited[S] = true;

        while(!q.isEmpty()){
            int next_pos = q.poll();
            int save_pos = next_pos;

            for(int i=0; i<3;i++){
                next_pos = save_pos;
                if(i==0){
                    next_pos += 1;
                } else if (i==1) {
                    next_pos -= 1;
                }else if (i==2) {
                    next_pos *= 2;
                }

                // 1. 영역을 벗어난 경우
                if(next_pos < 0 || next_pos > 100000)
                    continue;
                // 2. 지나간 경로일 경우
                if(visited[next_pos])
                    continue;
                // 3. 목적지 도착
                if (next_pos== K){
                    previous[K] = save_pos;
                    Stack<Integer> stack = new Stack<>();
                    stack.push(K);
                    int iter = K;
                    while(previous[iter] != -1){
                        stack.push(previous[iter]);
                        iter = previous[iter];
                    }
                    //시간 출력
                    StringBuilder sb = new StringBuilder();
                    sb.append(stack.size()-1+"\n");

                    // 경로 출력
                    while(!stack.isEmpty()){
                        sb.append(stack.pop()+" ");
                    }
                    System.out.println(sb);
                    return;
                }
                // 4. 경로에 추가
                q.add(next_pos);
                previous[next_pos] = save_pos;
                visited[next_pos] = true;
            }
        }
    }
}
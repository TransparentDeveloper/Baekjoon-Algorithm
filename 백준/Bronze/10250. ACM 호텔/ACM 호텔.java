import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int attempt = Integer.parseInt(br.readLine());
		
		for(int i=0; i<attempt; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine(), " ");
			int H = Integer.parseInt(st.nextToken());
			st.nextToken();
			int N = Integer.parseInt(st.nextToken());
		
			int room_num = 0;
		
			if(N%H==0) { 
				room_num = H*100;
				room_num = room_num + N/H;
			}
			else { 
				room_num = (N%H)*100;
				room_num = room_num + N/H+1;
			}
		
			System.out.println(room_num);
			}
		
	}
}
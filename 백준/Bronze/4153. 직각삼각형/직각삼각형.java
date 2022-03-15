import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		while(true) {
			StringTokenizer st = new StringTokenizer(br.readLine()," ");
			
			int[] edge = new int[3];
			
			edge[0] = Integer.parseInt(st.nextToken());
			edge[1] = Integer.parseInt(st.nextToken());
			edge[2] = Integer.parseInt(st.nextToken());
			
			if(edge[0]==0) {
				if(edge[1]==0 && edge[2]==0) {
					break;
				}
				System.out.println("wrong");
				continue;
			}
			
			Asencding(edge);
			
			int sqtAB = (int) (Math.pow(edge[0], 2) + Math.pow(edge[1],2));
			edge[2] = (int) (Math.pow(edge[2],2));

			if(sqtAB == edge[2])
				System.out.println("right");
			else
				System.out.println("wrong");
			
			
		}
		
	}
	
	static void Asencding(int[] arr) {
		for(int i=1; i<arr.length;i++) {
			if(arr[i-1]>arr[i]) {
				int tmp = arr[i-1];
				arr[i-1] = arr[i];
				arr[i] = tmp;
			}
				
		};
	}
}
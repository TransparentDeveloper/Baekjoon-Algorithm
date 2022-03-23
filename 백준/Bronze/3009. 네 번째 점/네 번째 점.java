import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	static boolean[] check = new boolean[123456*2+1];
	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int[][] dot = new int[3][2];
		int[] res = new int[2];
		int tmp;
		
		for(int i=0; i<3;i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			for(int j=0; j<2;j++) {
				dot[i][j] = Integer.parseInt(st.nextToken());
			}
		}
		
		for(int i=0; i<2;i++) {
			if(dot[1][i] == dot[2][i])
				res[i] = dot[0][i];
			else if(dot[0][i] == dot[2][i])
				res[i] = dot[1][i];
			else
				res[i] = dot[2][i];
		}
		
		System.out.println(res[0]+" "+res[1]);
		
	}
}
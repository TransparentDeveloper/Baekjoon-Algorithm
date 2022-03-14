import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int T = Integer.parseInt(br.readLine());
		
		for(int i=0; i< T; i++)
		{
			int k = Integer.parseInt(br.readLine());
			int n = Integer.parseInt(br.readLine());
			
			int[][] apt = new int[15][15];
			
			for(int j=0; j<15; j++) { 
				apt[0][j] = j;
				apt[j][1] = 1;
			}
		
			

			for(int j=1; j<15;j++) {
				for(int w=2; w<15;w++) {
					apt[j][w] = apt[j-1][w] + apt[j][w-1] ;
				}
			}
			
			System.out.println(apt[k][n]);
		}
		
	}
}
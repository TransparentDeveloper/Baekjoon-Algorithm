import java.io.BufferedReader;
import java.io.IOException;
import java.util.Arrays;
import java.io.InputStreamReader;
	
public class Main {
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(br.readLine());
		Integer[] arr = new Integer[N];

		while(N-->0) 
			arr[N] = Integer.parseInt(br.readLine());
		
		Arrays.sort(arr);
		
		for(int i=0; i<arr.length; i++) 
			System.out.println(arr[i]);
		
	}
}
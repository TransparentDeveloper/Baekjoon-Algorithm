import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int attempt = Integer.parseInt(br.readLine());
		
		
		StringTokenizer st = new StringTokenizer(br.readLine()," ");
			
		int[] nums = new int[attempt];
		int prime_counter = 0;
		
		for(int i=0; i<attempt; i++) {
			nums[i] = Integer.parseInt(st.nextToken());	
			prime_counter += is_prime(nums[i]);
		}
		
		System.out.println(prime_counter);
		
	}
	
	static int is_prime(int su) {
		if(su == 1)	return 0;
		if(su != 2 && su %2 == 0) return 0;
		else 
			for(int i=3; i<su/2; i+=2) 
				if(su%i==0)
					return 0;
		return 1;
	}
}
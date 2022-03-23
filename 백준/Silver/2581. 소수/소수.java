import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	static boolean[] not_prime = new boolean[10001];
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int M = Integer.parseInt(br.readLine());
		int N = Integer.parseInt(br.readLine());
		
		make_prime();
		int sum = 0, min = N; 
		for(int i=M; i<=N; i++) 
			if(not_prime[i] == false) {
				sum += i;
				min = (min < i) ? min : i;
			}
		if(sum == 0) {
			System.out.println(-1);
			return;
		}
		System.out.println(sum +"\n"+min);
	}
	static void make_prime() {
		not_prime[0] = true;
		not_prime[1] = true;
		for(int i=2; i<not_prime.length;i++) {
			if(not_prime[i] == true)
				continue;
			for(int j=i*2 ; j<not_prime.length; j+=i) 
				not_prime[j] = true;
		}
		not_prime[2] = false;
	}
}
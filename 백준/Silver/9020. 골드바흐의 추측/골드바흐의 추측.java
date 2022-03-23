import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	static boolean[] not_prime = new boolean[10001];

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int attempt = Integer.parseInt(br.readLine());
		get_prime();
		int res;
		for(int i=0; i<attempt;i++) {
			res=0;
			int num = Integer.parseInt(br.readLine());
			int half = num/2;
			
			while(2<=half) {
				if(not_prime[half]||not_prime[num-half]) {
					half--;
					continue;
				}
				res = half;
				break;
			}
			System.out.println(res+" "+(num-res));	
		}
	}
	static void get_prime() {
		not_prime[0] = true;
		not_prime[1] = true;
		for(int i=2; i<Math.sqrt(not_prime.length);i++) {
			if(not_prime[i] == true)
				continue;	
			for(int j=i * i ; j<not_prime.length; j+=i) 
				not_prime[j] = true;
		}
	}
}
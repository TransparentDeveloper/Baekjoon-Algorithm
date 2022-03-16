import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	static boolean[] check = new boolean[123456*2+1];
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		prime_check();
		
		while(true) {
			int n = Integer.parseInt(br.readLine());
			if(n==0) break;
			int count=0;
			for(int i = n+1; i <=n*2 ; i++) 
				if(!check[i]) count++;
			
			System.out.println(count);
			
		}
	
	}
	
	static void prime_check() {
		
		check[0]=check[1]=true;
		
		for(int i=2; i<Math.sqrt(check.length);i++) {
			if(check[i]==true)
				continue;
			for(int j=i * i; j<check.length;j+=i)
				check[j]=true;
		}
	}
}

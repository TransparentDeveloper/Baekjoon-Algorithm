import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	
	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		
		int distance = 1;
		
		int destination = Integer.parseInt(br.readLine());
		
		int interval = 0;
		int last = 1;
		
		while(true) {
			
			if(last >= destination) 
				break;
			
			interval++;
			last = last + 6*interval;
			
		}
		
		distance += interval;
		System.out.println(distance);

	}
}
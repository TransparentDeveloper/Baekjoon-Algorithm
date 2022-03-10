import java.io.IOException;

public class Main {
	
	public static void main(String[] args) throws IOException {
		int N=0;
		int input;
		
		while(true) {
			input = System.in.read();
			
			if(input == 10 || input == 32)
				break;
			if(input>47 && input<58) {
				input -= 48;
				N = N*10 + input;
			}
		}
		
		
		int result=0;
		input = 0;
		
		for(int i=0; i<N; i++) {
			input = System.in.read();
			input -= 48;
			result += input;
		}
		
		System.out.println(result);
			
	}
	

}
import java.io.IOException;
 
public class Main {
 
	public static void main(String[] args) throws IOException{
 
		int c = 0;
		int count = 0;
		int pre_c = 32;
		
		while(true) {
			c = System.in.read();
			
			if(c == 32) {
				if(pre_c != 32)
					count ++;
			}
			
			else if(c == 10) {
				if(pre_c != 32)
					count ++;
				break;
			}
			
			pre_c = c;
		}
		
		System.out.println(count);
	}
	
}

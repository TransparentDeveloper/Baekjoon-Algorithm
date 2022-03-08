import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	
	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		
		int num = Integer.parseInt(br.readLine());
		int count = 0;
		
		for(int i=0; i<num; i++) {
			int check=1;
			boolean[] alpa = new boolean[26];
			int pre_c = 0;
			int c=0;
			String string = br.readLine();
			
			for(int j=0; j<string.length();j++) {
				c = string.charAt(j);
				if(c>96&&c<123) {
				if(pre_c != c) {
					if(alpa[c-97]==true) {
						check=0;
						break;
					}
					alpa[c-97]=true;
					pre_c = c;
				}
				}
			}
			count +=check;
		}
		
		System.out.print(count);
	}
	

}
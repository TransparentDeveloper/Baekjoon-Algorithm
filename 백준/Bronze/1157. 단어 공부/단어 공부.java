import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
 
public class Main {
 
	public static void main(String[] args) throws IOException{
 
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String s = br.readLine();
		int[] alpa = new int[26];
		
		for(int i=0; i<s.length();i++) {
			if(s.charAt(i)>96)
				alpa[s.charAt(i)-97]++;
			else
				alpa[s.charAt(i)-65]++;
		}
		
		
		int max = 0;
		int ch = -2;
		
		for(int i=0; i<26;i++) {
			if(max<alpa[i]) {
				max=alpa[i];
				ch=i;
			}
			else if(max==alpa[i]) {
				ch = -2;
			}
		}
		
		
		System.out.println((char)(ch+65));
		
	}
	
}
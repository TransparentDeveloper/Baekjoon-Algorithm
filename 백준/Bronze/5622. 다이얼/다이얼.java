import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	
	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int[] alpa = new int[26];
		
		int diaual = 1;
		int dur = 3;
		
		for(int i=0; i<26;) {
			diaual++;
			
			if(diaual == 9 || diaual == 7)
				dur =4;
			
			for(int j=0; j<dur; j++) {
				alpa[i] = diaual+1;
				i++;
			}
			
			if(dur != 3)
				dur =3;
		}

		
		int res = 0;
		String s = br.readLine();
		
		for(int i=0; i<s.length();i++) {
			char c = s.charAt(i);
			
			res += alpa[c-'A'];
		}
		
		System.out.println(res);

	}
}
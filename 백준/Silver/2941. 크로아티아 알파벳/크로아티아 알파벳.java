import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {
		String[] cro = {"c=","c-","dz=","d-","lj","nj","s=","z="};
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String s = br.readLine();
		
		for(int i=0; i<8;i++) {
			if(s.contains(cro[i]))
				s = s.replace(cro[i], "c");
		}
		
		System.out.println(s.length());
	}
	
}
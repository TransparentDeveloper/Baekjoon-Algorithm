import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int r = Integer.parseInt(br.readLine());
		
		double pi = 3.14159265358979;
		double taxi = 2*r*r;
		double ucled = (r*r*pi);
		System.out.println(String.format("%.6f",ucled));
		System.out.println(String.format("%.6f",taxi));
		
	}	
}
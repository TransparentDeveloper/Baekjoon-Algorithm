import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int weight = Integer.parseInt(br.readLine());
		int tmp = weight;
		int fiveKg = weight / 5;
		int threeKg = 0;
		int min = weight / 5 + weight /3;
		boolean check = false;
		
		if(fiveKg==0) {
			if(weight%3==0) {
				check = true;
				min =weight/3;
			}
		}
		else {
			for(int i=fiveKg; i>=0; i--) {
				weight = tmp;
				weight = weight - i*5;
				if(weight%3==0) {
					check = true;
					threeKg = weight/3;
					min = (min>=i+threeKg)? i+threeKg : min;
				}
			}
		}
		
		if(check == true)
			System.out.println(min);
		else {
			System.out.println(-1);
		}
	}
}

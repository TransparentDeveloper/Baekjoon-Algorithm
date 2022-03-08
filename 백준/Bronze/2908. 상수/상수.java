import java.io.IOException;
import java.util.Scanner;

public class Main {
 
	public static void main(String[] args) throws IOException{
		Scanner scanner = new Scanner(System.in);
		
		int num1 = scanner.nextInt();
		int num2 = scanner.nextInt();
		
		num1 =reverse(num1);
		num2 = reverse(num2);
		
		System.out.println(bigger(num1,num2));
		
	}
	
	static int bigger(int su1, int su2) {
		int res= su1;
		if(res<su2)
			res=su2;
		return res;
	}
	
	static int reverse(int su) {
		int res=0;
		while(su != 0) {
			res = res*10 + su%10;
			su = su/10;
		}
		
		return res;
	}
	
}
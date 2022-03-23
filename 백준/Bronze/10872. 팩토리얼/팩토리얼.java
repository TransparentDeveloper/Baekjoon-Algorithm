import java.io.IOException;
import java.util.Scanner;

public class Main {

	static boolean[] not_prime = new boolean[10001];

	public static void main(String[] args) throws IOException {
		Scanner s = new Scanner(System.in);
		int input = s.nextInt();
		s.close();
		System.out.println(factorial(input));
	}
	
	static int factorial(int n) {
		if(n==1 || n==0)
			return 1;
		return n*factorial(n-1);
	}
}
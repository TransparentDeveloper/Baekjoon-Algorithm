import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		int[] input = new int[num];
		int max;
		int min;
		
		input[0]=sc.nextInt();
		max = input[0];
		min = input[0];
		
		for(int i=1;i<num;i++) {
			input[i]=sc.nextInt();
			max = (max>input[i]) ? max : input[i];
			min = (min<input[i]) ? min : input[i];
		}
		sc.close();
		
		System.out.println(min+" "+max);
		
	}
}
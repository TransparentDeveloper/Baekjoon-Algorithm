import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		int cur = num;
		int cycle = 1;
		
		sc.close();
		
		if( 0>num && 99<num)
			return ;
		num = (num % 10)*10 +(num/10 + num%10)%10;
		
		while(num != cur) {
			if(num<10) 
				num = num*10 +num%10;
			
			else 
				num = (num % 10)*10 +(num/10 + num%10)%10;
					
			cycle += 1;
			
		}
		System.out.println(cycle);
	}
}
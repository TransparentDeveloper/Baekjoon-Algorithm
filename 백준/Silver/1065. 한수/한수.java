import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int N = scanner.nextInt();
		
		

		int i=1;
		int count=0;
		
		while(i!=N+1) {
			if(i/100==0)
				count ++;
			else
				count = func(i) ? count+1: count;
			i++;
		}
		
		System.out.println(count);
	}
	
	static boolean func(int i) {
		boolean check =true;
		
		int su1 = i%10;
		i = i/10;
		int su2 = i%10;
		int dis = su1-su2;

		while(i>=10) {
			su1 = i%10;
			
			i = i/10;
			su2 = i%10;
			if(dis!=su1-su2) {
				check = false;
				break;
			}
			dis = su1-su2;
		}
		return check;
	}
	
	
}
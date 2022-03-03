public class Main {
	public static void main(String[] args) {
		boolean[] check = new boolean[10000];
		int tmp;
		for(int i = 1; i<=10000;i++) {
			tmp = func(i);
			if(tmp<=10000) {
				check[tmp-1]=true;
			}	
		}
		for(int i = 1; i<=10000;i++) {
			if(check[i-1]==false)
				System.out.println(i);
		}
	}
	static int func(int i) {
		int res = i;
		while(i!=0) {
			res += i%10;
			i=i/10;
		}
		return res;
	}
}

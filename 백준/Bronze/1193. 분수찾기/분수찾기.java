import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	
	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int X = Integer.parseInt(br.readLine());
		
		int xPlusY =3;								//	분자+분모
		
		int min = 2;								//	같은 (분자+분모)를 가지는 분수 중에 가장 처음 발견되는 분수의 순서 
		int addend =2;								//	같은 (분자+분모)를 가지는 분수의 갯수
		
		//	X번째 분수의 (분자+분모)과 같은 값을 가지는 분수 중 가장 먼저 발견되는 분수의 순서를 구한다.
		// 	추가적으로, X번째 분수의 (분자+분모) 값도 구한다.
		while(true) {
			
			if(X<min) {
				addend -= 1;
				min -= addend;
				xPlusY -= 1;
				break;
			}
			
			min += addend;
			addend += 1; 
			xPlusY += 1;
		}
		
		
		int diff = X-min+1;							// X번째와 min번째 분수 간 포함된 분수의 갯수를 구한다.
		int ja;										// 분자
		int mo;										// 분모
		
		if(xPlusY%2==0) {							// 분자+분모가 짝수일 경우
			mo=diff;
			ja=xPlusY-mo;
			
		}
		else {										// 분자+분모가 홀수일 경우
			ja=diff;
			mo=xPlusY-ja;
		}
		
		System.out.println(ja+"/"+mo);
		
		

	}
}
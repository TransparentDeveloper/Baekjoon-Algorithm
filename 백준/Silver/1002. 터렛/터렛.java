import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int attempt = Integer.parseInt(br.readLine());
		for(int i=0; i<attempt;i++){
		StringTokenizer st	= new StringTokenizer(br.readLine()," ");

		int x1 = Integer.parseInt(st.nextToken());
		int y1 = Integer.parseInt(st.nextToken());
		int r1 = Integer.parseInt(st.nextToken());
		int x2 = Integer.parseInt(st.nextToken());
		int y2 = Integer.parseInt(st.nextToken());
		int r2 = Integer.parseInt(st.nextToken());
		
		int squ_dis = (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1);
		int squ_sumR = (r1+r2)*(r1+r2); 
		
		int count = 0;
		
		//원의 중심과 반지름이 같을 경우
		if(x1==x2 && y1==y2 && r1==r2) 
			count = -1;
		
		// 반지름의 합보다 두 점 사이의 거리가 클 경우
		else if(squ_dis>squ_sumR)
			count = 0;
		
		// 반지름의 합과 두 점 사이의 거리가 같을 경우
		else if(squ_dis==squ_sumR) 
			count = 1;
		
		// 반지름의 합보다 두 점 사이의 거리가 작을 경우
		else {
			int min_r = (r1<r2)? r1 : r2;
			int max_r = (r1>r2)? r1 : r2;
			
			int dis = (int) Math.sqrt(squ_dis);
			int sub_r = max_r-min_r;
			
			// 두점에서 만날 경우
			if(sub_r < dis) 
				count=2;
			// 작은 원이 큰 원에 내접할 경우
			else if (sub_r==dis) 
				count = 1;
			// 큰 원 안에 작은 원이 포함되어 있을 경우
			else {}
			
		}
		
		System.out.println(count);
		
		
		}
	}

	
}
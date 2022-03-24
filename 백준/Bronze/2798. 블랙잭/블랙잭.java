import java.io.BufferedReader;
import java.io.IOException;
import java.util.StringTokenizer;
import java.io.InputStreamReader;
	
public class Main {
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		int[] nums= new int[N];
		StringTokenizer st2 = new StringTokenizer(br.readLine());
		while(N-->0) {
			nums[N] = Integer.parseInt(st2.nextToken());
		}
		
		int cadidate = 0;
		int res = 0;
		
		for(int i=0; i<nums.length-2;i++) {
			cadidate = nums[i];
			if(cadidate>=M) continue;
			for(int j=i+1; j<nums.length-1;j++) {
				cadidate = nums[i];
				cadidate += nums[j];
				if(cadidate>=M) continue;
				for(int k=j+1;k<nums.length;k++) {
					cadidate = nums[i];
					cadidate += nums[j];
					cadidate += nums[k];
					if(res<cadidate && cadidate<=M)
						res = cadidate;
				}
			}
		}
		
		System.out.println(res);
	}
}
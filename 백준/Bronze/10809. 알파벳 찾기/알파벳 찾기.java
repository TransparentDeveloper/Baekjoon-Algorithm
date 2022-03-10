import java.io.IOException;

public class Main {
	
	public static void main(String[] args) throws IOException {
		
		int c;
		int[] alpa = new int[26];
		int pos=0;
		
		for(int i=0;i<26;i++)
			alpa[i] = -1;
		
		while(true){
			c = System.in.read();
			
			if(c==10 || c==35) 
				break;
			if(c>='a'&&c<='z')
				if(alpa[c-'a']==-1)
					alpa[c-'a'] = pos;
			
			pos++;
			
		}
		
		for(int result: alpa)
			System.out.print(result+" ");
		
			
	}
	

}
import java.io.IOException;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) throws IOException{
		int num1 = 0;
		int num2 = 0;
		int input;
		int za_li = 1;
		while(true) {
			input = System.in.read();
			
			if(input == 10 || input == 32)
				break;
			if(47<input&&input<58) {
				input = input-48;
				num1 = za_li*input+num1;
				za_li *= 10;
			}
		}
		za_li = 1;
		while(true) {
			input = System.in.read();
			
			if(input == 10 || input == 32)
				break;
			if(47<input&&input<58) {
				input = input-48;
				num2 = za_li*input+num2;
				za_li *= 10;
			}
		}
		
		int res = (num1>num2) ? num1: num2;
		System.out.println(res);
	}
	
}
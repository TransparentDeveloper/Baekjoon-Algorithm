import java.util.*;

class Solution {
    public boolean isPrime (long a){

        if(a<2) return false;

        for(int i=2;i<=Math.sqrt(a);i++){
            if(a%i==0){
                return false;
            }
        }
        return true;
    }

    public int solution(int n, int k) {
        String jin = Integer.toString(n,k);
        int answer= 0;
        StringTokenizer st = new StringTokenizer(jin,"0");
        while(st.hasMoreTokens()){
            long num = Long.parseLong(st.nextToken());
            if (isPrime(num))
                answer++;
        }
        return answer;
    }
}
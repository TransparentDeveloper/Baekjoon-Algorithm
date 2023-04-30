class Solution {
    public int[] solution(int n, int m) {
        int sml = n>m?m:n;
        int big = n>m?n:m;
        int r;
        while(sml != 0){
            r = big%sml;
            big = sml;
            sml = r;
        }
        int gcd = big;
        int lcm = (n*m)/gcd;
        
        
        int[] answer = new int[2];
        answer[0] = gcd; answer[1] = lcm;
        return answer;
    }
    
}
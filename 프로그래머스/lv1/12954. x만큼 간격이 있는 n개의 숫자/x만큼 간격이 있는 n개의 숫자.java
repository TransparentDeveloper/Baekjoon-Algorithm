class Solution {
    public long[] solution(int x, int n) {
        long[] answer = new long[n];
        
        for(long i=1; i<n+1; i++)
            answer[(int)i-1] = (long)x*i;
        
        return answer;
    }
}
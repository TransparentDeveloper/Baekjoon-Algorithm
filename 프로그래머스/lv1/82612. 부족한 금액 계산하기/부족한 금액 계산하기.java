class Solution { 
    public long solution(int price, int money, int count) {
        long answer = (long)money;
        for(int i=1; i<= count;i++){
            answer -= (long)(price * i);
        }
       return answer<0 ? (long)(-1) * (answer) : 0;
    }
}
    
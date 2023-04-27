class Solution {
    public int solution(int[] numbers) {
        boolean[] is = new boolean[10]; // [false, false, false,....,false]
        
        for(int num : numbers)
            is[num] = true;
        
        int answer = 0;
        
        for(int i=0; i<is.length; i++){
            if (!is[i]){
                answer+=i;
            }
        }
        
        return answer;
    }
}
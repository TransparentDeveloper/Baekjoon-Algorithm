class Solution { // dfs
    static int[] g_numbers;
    static int g_target;
    static int result;
    public int solution(int[] numbers, int target) {
        g_numbers = numbers;
        g_target = target;
        dfs(0,0);
        
        return result;
    }
    
    void dfs(int sum, int idx){
        if(idx== g_numbers.length){
            if(sum == g_target)
                result ++;
            return;
        }
        
        dfs(sum+(g_numbers[idx]*(-1)),idx+1);
        dfs(sum+(g_numbers[idx]),idx+1);
        
    }
}
class Solution { //dfs
    static int[][] g_computers;
    static int g_n;
    int t_row, t_col;
    
    public int solution(int n, int[][] computers) {
        g_computers=computers;
        g_n = n;
        t_row = computers.length;
        t_col = computers[0].length;
        
        int result = 0;
        
        for(int r=0; r<t_row; r++){
            for(int c=0; c<t_col; c++){

                if(g_computers[r][c]==1){
                    result++;
                    g_computers[r][c]=0;
                    g_computers[c][r]=0;
                    dfs(c);

                }
            }
        }
        
        return result;
    }
    
    void dfs(int row){
    System.out.println(row);
       for(int col =0; col<t_col; col++){
           if(g_computers[row][col]==1){
               g_computers[row][col] = 0;
               g_computers[col][row] = 0;
                dfs(col);
           }
       }
    }
}
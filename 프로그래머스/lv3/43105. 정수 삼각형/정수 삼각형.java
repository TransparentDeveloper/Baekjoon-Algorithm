class Solution {
    public int solution(int[][] triangle) {
        int[][] answer = new int[triangle.length][triangle[triangle.length-1].length];
        
        answer[0][0] = triangle[0][0];
        
        for(int row = 1; row< triangle.length; row++){
            for(int col = 0; col< triangle[row].length; col++){
                // 가장 좌측
                if(col==0)
                    answer[row][0] = answer[row-1][0] + triangle[row][0];
                // 가장 우측
                else if(col == triangle[row].length){
                    answer[row][col] = answer[row-1][col-1] + triangle[row][col];
                }
                // 중간
                else{
                    answer[row][col] 
                        = Math.max(
                        answer[row-1][col-1] + triangle[row][col],
                        answer[row-1][col] + triangle[row][col]
                    );
                }
                
            }
        }
        int result = Integer.MIN_VALUE;
        for(int res: answer[triangle.length-1])
            result = Math.max(result,res);
        return result;
    }
}

    
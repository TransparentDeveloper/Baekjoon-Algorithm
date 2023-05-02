class Solution {
    public int[][] solution(int[][] arr1, int[][] arr2) {
        int[][] answer = new int[arr1.length][arr2[0].length];
        
        for(int r = 0; r<arr1.length ;r++){
            for(int c=0; c<arr2[0].length;c++){
                answer[r][c] = arr1[r][0] * arr2[0][c];
                for(int i=1; i<arr1[0].length ; i++)
                {
                    answer[r][c] += arr1[r][i] * arr2[i][c];
                }
            }
        }
        
        return answer;
    }
}

// a1의 열과 a2의 행은 같다.
// 1   4       3   3
// 3   2       3   3
// 4   1
    
//  3*2        2*2     3*2   
    
//     1*3 + 4*3 = 3+12
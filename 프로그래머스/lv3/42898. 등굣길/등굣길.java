class Solution {
    public int solution(int m, int n, int[][] puddles) {
        long[][] road = new long[n+1][m+1];
        for(int r=1; r<n+1;r++){
            for(int c=1; c<m+1;c++){
                road[r][c] = -1;        
            }
        }
        for(int[] puddle: puddles){
            road[puddle[1]][puddle[0]] = 0;
        }
        road[1][1] = 1;
        for(int r=1; r<n+1;r++){
            for(int c=1; c<m+1;c++){
                if(road[r][c]!=-1) continue;     
                if(r==1) road[r][c] = road[r][c-1];
                else if(c==1) road[r][c] = road[r-1][c];
                else road[r][c] = (road[r][c-1] + road[r-1][c])%1000000007;
            }
        }
        return (int)(road[n][m]%1000000007);
    }
}
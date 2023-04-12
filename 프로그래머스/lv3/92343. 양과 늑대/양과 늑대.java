class Solution {
       int[] gInfo;    // info 를 전역변수로 바꾼다.
    int[][] gEdges; // edges를 전역변수로 바꾼다.
    int maxSheepCnt = 0; // 최대 가질 수 있는 양의 수
    public int solution(int[] info, int[][] edges) {
        gInfo = info;
        gEdges = edges;
        boolean[] initVisited = new boolean[info.length];
        dfs(0,initVisited,0,0);

        return maxSheepCnt;
    }

    public void dfs(int idx, boolean[] visited, int sheepCnt, int wolfCnt){

        visited[idx] = true;
        if(gInfo[idx] == 0){ // 현 위치에 있는 동물이 양이라면
            sheepCnt++;     // 양의 카운트 올리고,
            if(sheepCnt > maxSheepCnt){ // 갱신
                maxSheepCnt = sheepCnt;
            }
        } else{ // 현 위치에 있는 동물이 늑대라면
            wolfCnt++;  // 늑대 카운트 올리고
        }

        /**
         * 여기까지 현재 상태를 갱신
         */


        /**
         * 여기서부터 검증
         * 필요없으면 현재 상태를 다음상태로 안넘긴다.
         */
        if (sheepCnt <= wolfCnt){
            return;
        }


        /**
         * 다음으로 이동할 상태를 찾는다.
         */
        for(int[] edge: gEdges){
            if(visited[edge[0]] && !visited[edge[1]]){ // 부모상태는 지나왔고, 자식상태는 아직 가보지 못했다면
                boolean[] nextVisited = new boolean[visited.length];
                for(int i=0; i< visited.length;i++){
                    nextVisited[i] = visited[i];
                }
                dfs(edge[1],nextVisited,sheepCnt,wolfCnt);
            }
        }
    }
}
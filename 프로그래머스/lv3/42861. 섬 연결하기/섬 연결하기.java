import java.util.*;
class Solution {
    int[] parent;
    public int solution(int n, int[][] costs) {
        List<Node> list = new ArrayList<>();
        parent = new int[n+1];
        // 크루스칼 알고리즘
        for(int[] cost: costs){
            list.add(new Node(cost[0],cost[1],cost[2]));
        }
        
        for(int i=0; i<parent.length; i++)
            parent[i] = i;
        
        Collections.sort(list);
        int answer =0;
        for(Node l: list){
            int s = l.s;
            int e = l.e;
            int c = l.c;
            
            if(findParent(s) != findParent(e)){
                union(s,e);
                answer += c;
            }
            else
                continue;
        }
        
        return answer;
    }
    int findParent(int s){
        if(s == parent[s]){
            return s;
        }
        return findParent(parent[s]);
    }
    void union(int s, int e){
        int p1 = findParent(s);
        int p2 = findParent(e);
        
        if(p1<p2)
            parent[p2] = p1;
        else
            parent[p1] = p2;
    }
    
    
    class Node implements Comparable<Node>{
        int s;
        int e;
        int c;
        Node(int s, int e, int c){
            this.s = s;
            this.e = e;
            this.c = c;
        }
        @Override
        public int compareTo(Node n){
            return Integer.compare(this.c, n.c);
        }
    }
}
import java.util.PriorityQueue;
import java.util.Collections;
class Solution {
    public int solution(int k, int m, int[] score) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        int total = 0;
        int minPrice = 0;
        
        for(int sc: score){
            pq.add(sc);
        }
        
        while(pq.size()>=m){
            minPrice = Integer.MAX_VALUE;
            for(int i=0; i<m;i++){
                minPrice = Math.min(minPrice, pq.poll());
            }
            total+= (minPrice * m);
        }
        return total;
    }
}
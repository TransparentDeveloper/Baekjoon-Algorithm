import java.util.*;
class Solution {
    public int solution(int[] order) {
        Stack<Integer> stack = new Stack<>();
        
        int answer = 0;
        int idx = 0; // order 추적
        for(int box=1;;box++){
            if(idx==order.length) break;
            if(box == order[idx]){answer++;idx++;}
            else if(!stack.isEmpty() && stack.peek() == order[idx]){answer++;box--;idx++;stack.pop();}
            else if(box>=order.length) break;
            else stack.push(box);
        }
        return answer;
        
    }
}
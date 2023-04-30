import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        Stack<Integer> stack = new Stack<>();
        
        for(int ar: arr){
            if(!stack.empty() && stack.peek() == ar)
                continue;
            stack.push(ar);
        }
        
        return stack.stream().mapToInt(i->i).toArray();
    }
}
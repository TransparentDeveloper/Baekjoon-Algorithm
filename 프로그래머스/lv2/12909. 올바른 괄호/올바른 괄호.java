import java.util.Stack;
class Solution {
    boolean solution(String s) {
        boolean answer = true;
        
        Stack<String> stack = new Stack<>();
        stack.push("base");
        for(int i=0; i<s.length(); i++){
            if(s.charAt(i) == '(')
                stack.push("(");
            else if ( s.charAt(i) == ')' && stack.peek().equals("(") )
                stack.pop();
            
            else{
                answer = false;
                break;
            }
        }
        
        
        if(answer && stack.peek().equals("("))
            return false;
        return answer;
    }
}
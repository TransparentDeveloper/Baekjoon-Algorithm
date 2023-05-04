import java.util.*;
class Solution
{
    public int solution(String s)
    {
        Stack<String> stk = new Stack<>();
        String part="";
        for(int i=0; i<s.length(); i++){
            part = String.valueOf(s.charAt(i));
            if(
                !stk.isEmpty() && 
                stk.peek().equals(part)
              ){
                stk.pop();
                continue;
            }
            stk.push(part);
        }
        
        return (stk.isEmpty())?1:0;
    }
}
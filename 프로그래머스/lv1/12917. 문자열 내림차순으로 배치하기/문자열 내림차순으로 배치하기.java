import java.util.*;

class Solution {
    public String solution(String s) {
        String[] spl = s.split("");
        Arrays.sort(spl, 
                   (o1,o2) ->
                   (o2+o1).compareTo(o1+o2)
                   );
        StringBuilder sb = new StringBuilder();
        for(String sp : spl){
            sb.append(sp);
        }
        return sb.toString();
    }
}
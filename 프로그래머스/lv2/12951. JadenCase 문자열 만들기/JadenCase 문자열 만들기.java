class Solution {
    public String solution(String s) {
        
        String[] subStrings = s.split(" ");
        StringBuilder assemble = new StringBuilder();
        for(String subStr : subStrings){
            subStr = subStr.trim();
            assemble.append(" ");
            if(subStr.length() == 0) continue;
            assemble.append(subStr.substring(0,1).toUpperCase().trim());
            assemble.append(subStr.substring(1,subStr.length()).toLowerCase().trim());

        }
        String answer = assemble.toString().trim();
        if(" ".equals(s.substring(s.length()-1,s.length())))
            answer += " ";
        
        return answer;
    }
}
class Solution {
    public String solution(String s, int n) {
        String answer = "";
        
        for(int i=0; i<s.length(); i++){
            if('a'<=s.charAt(i) && s.charAt(i)<='z'){
                answer += (char) ((s.charAt(i) - 'a' + n) % 26 + 'a');
            }
            else if('A'<=s.charAt(i) && s.charAt(i)<='Z'){
                answer += (char) ((s.charAt(i) - 'A' + n) % 26 + 'A');
            }
            else answer += " ";
        }
        return answer;
    }
}
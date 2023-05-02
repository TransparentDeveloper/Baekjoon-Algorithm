class Solution {
    public String solution(String phone_number) {
        String[] strs = phone_number.split("");
        
        String answer = "";
        for(int i=0; i< strs.length;i++){
            if(i>=strs.length-4){
                answer+=strs[i];
                continue;
            }
            
            answer+="*";
        }
        return answer;
    }
}
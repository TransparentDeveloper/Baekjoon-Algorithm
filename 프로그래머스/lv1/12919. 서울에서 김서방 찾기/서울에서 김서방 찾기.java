class Solution {
    public String solution(String[] seoul) {
        String answer ="김서방은 ";
        int idx=0;
        for(String seo: seoul){
            if (seo.equals("Kim"))
                answer += idx;
            idx++;
        }
        return answer+"에 있다";
    }
}
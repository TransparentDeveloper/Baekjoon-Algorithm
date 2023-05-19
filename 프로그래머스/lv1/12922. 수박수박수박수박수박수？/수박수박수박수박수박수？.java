class Solution {
    public String solution(int n) {
        String[] 수박 = new String[]{"수","박"};
        StringBuilder sb = new StringBuilder();
        for(int i=0; i<n;i++){
            sb.append(수박[i%2]);
        }
        return sb.toString();
    }
}
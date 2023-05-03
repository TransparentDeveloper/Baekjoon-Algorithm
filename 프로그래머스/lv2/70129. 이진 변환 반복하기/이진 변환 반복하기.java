class Solution {
    public int[] solution(String s) {
        int cnt_tran = 0;
        int cnt_zero = 0;
        
        StringBuilder sb;
        while(!s.equals("1")){
            sb = new StringBuilder();
            int tmp =s.length();
            for(int i=0; i< s.length();i++){
                if(s.charAt(i) == '1')
                    sb.append("1");
            }
            s = sb.toString();
            cnt_zero += tmp - s.length();
            
            s = Integer.toString(s.length(), 2);
            cnt_tran++;
        }
        
        return new int[]{cnt_tran,cnt_zero};
    }
}
class Solution {
    public int solution(int[] array) {
        int[] cnt = new int[1000];
        for(int ar: array)
            cnt[ar]++;
        int max_idx = 0;
        boolean 중복 = true;
        for(int i=0; i<cnt.length;i++){
            if (cnt[max_idx]<cnt[i]) {max_idx=i; 중복 = false;}
            else if (cnt[max_idx]==cnt[i] && !중복) 중복 = true;
        }
        if(cnt[0] >= cnt[max_idx]) return 0; // 0의 갯수가 가장 많을 경우
        else if(중복) return -1;
        else return max_idx;
    }
}
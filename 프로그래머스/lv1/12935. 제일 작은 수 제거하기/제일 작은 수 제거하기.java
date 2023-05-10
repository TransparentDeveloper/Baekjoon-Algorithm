import java.util.*;
class Solution {
    public int[] solution(int[] arr) {
        if (arr.length == 1) return new int[]{-1};
        int min_num = Integer.MAX_VALUE;
        int idx = 0;
        for(int i=0; i<arr.length ;i++)
            if(arr[i] < min_num){
                min_num = arr[i];
                idx =i;
            }
        int[] answer = new int[arr.length-1];
        for(int i=0; i<idx;i++){
            answer[i] = arr[i];
        }
        for(int i=idx+1;i<arr.length;i++){
            answer[i-1] = arr[i];
        }
        return answer;
    }
}
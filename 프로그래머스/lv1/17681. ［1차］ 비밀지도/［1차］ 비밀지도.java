class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        int[] rows = new int[arr1.length];
        for(int i=0; i<arr1.length;i++)
            rows[i] = (int)(arr1[i] | arr2[i]);
        String[] answer = new String[arr1.length];
        for(int i=0; i<arr1.length;i++){
            answer[i] = Integer.toString(rows[i],2);
            while(answer[i].length() < n)
                answer[i] = "0"+answer[i];
            
            answer[i] = answer[i].replaceAll("0"," ");
            answer[i] = answer[i].replaceAll("1","#");
        }
        return answer;
    }
}
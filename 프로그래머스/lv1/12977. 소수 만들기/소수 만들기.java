class Solution {
    
    boolean[] isComposite = new boolean[3000];
    
    void findCompoite(){
        for(int i=2;i<3000;i++){
            for(int j=i*i;j<3000;j+=i){
                if(isComposite[j])
                    continue;
                isComposite[j] = true;
            }
        }
        isComposite[2] = false;
    }
        
        
    public int solution(int[] nums) {
        findCompoite();
        int answer=0;
        
        for(int i=0; i<nums.length-2;i++){
            for(int j=i+1; j<nums.length-1;j++){
                for(int k=j+1; k<nums.length;k++){
                    if(!isComposite[ (nums[i]+nums[j]+nums[k]) ]){
                        answer ++;
                    }
                }
            }
        }
        return answer;
    }
}
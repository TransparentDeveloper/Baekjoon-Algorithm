import java.util.*;

class Solution {
    public int solution(String[] babbling) {
        Map<String, Integer> map = new HashMap<>();
        
        String[] possible = {"aya", "ye", "woo", "ma"," "};
        
        for(int i=0; i<5; i++){
            for(int j=0; j<5;j++){
                for(int k=0; k<5;k++){
                    for(int l=0; l<5;l++){
                        StringBuilder sb = new StringBuilder();
                        if(!possible[i].equals(" "))sb.append(possible[i]);
                        if(!possible[j].equals(" "))sb.append(possible[j]);
                        if(!possible[k].equals(" ")) sb.append(possible[k]);
                        if(!possible[l].equals(" "))sb.append(possible[l]);
                        map.put(sb.toString(),1);
                    }
                }
            }
        }
        int answer = 0;
        for(String babb: babbling){
           if (map.containsKey(babb)){
               answer++;
           }
        }
        
        return answer;
    }
}
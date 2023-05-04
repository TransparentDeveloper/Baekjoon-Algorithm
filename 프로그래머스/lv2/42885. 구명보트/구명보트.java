import java.util.*;
class Solution {
    public int solution(int[] people, int limit) {
        
        Arrays.sort(people);
        
        int front = 0;
        int answer =0;
        for(int hevy = people.length-1; hevy>=0; hevy--){
            if(front > hevy){
                break;
            }
            if(front == hevy){
                answer ++;
                break;
            }
            if(limit - people[hevy] < 40){ // 40 이하의 사람은 없으므로 이경우엔 무조건 혼자 타야함
                answer++;
                continue;
            }
            else if(people[front]+people[hevy] >limit){ // 가장 가벼운 사람하고도 못타면 혼자 타야함
                answer++;
                continue;
            }
            else { // 가장 가벼운 사람하고 탑승가능
                answer++;
                front++;
            }
            
        }
    
            
        return answer;
    }
}
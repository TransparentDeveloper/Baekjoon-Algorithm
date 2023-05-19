import java.util.*;
class Solution {
    public boolean solution(String[] phone_book) {
        Map<String,String> map = new HashMap<>();
        for(String phone: phone_book){
            map.put(phone,phone);
        }
        for(String phone: phone_book){
            for(int end=1; end<=phone.length();end++){
                if(
                    map.containsKey(phone.substring(0,end)) &&
                    !phone.equals(phone.substring(0,end))
                )
                    return false;
            }   
        }
        return true;
    }
}
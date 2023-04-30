import java.util.*;
class Solution {
    public boolean solution(String s) {
        return (s.length()==6||s.length()==4)&&s.chars().allMatch(Character::isDigit);
    }
}
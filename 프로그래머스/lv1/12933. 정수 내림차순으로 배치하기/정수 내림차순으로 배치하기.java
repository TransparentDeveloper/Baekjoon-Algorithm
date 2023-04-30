import java.util.*;
class Solution {
    public long solution(long n) {
        StringBuilder sb = new StringBuilder(String.valueOf(n));
        String s = sb
            .chars()
            .sorted()
            .collect(StringBuilder::new, StringBuilder::appendCodePoint,StringBuilder::append)
            .reverse().toString();
        return Long.parseLong(s);
    }
}
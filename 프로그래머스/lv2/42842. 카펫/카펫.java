import java.util.*;
class Solution {
    public int[] solution(int brown, int yellow) {
        int h_w = (brown+4)/2;
        List<Integer> list = new ArrayList<>(); 
        for(int h= 1; h<= h_w/2 ; h++){
            list.add(h);
        }
        int w = 0;
        int h =0;
        
        if(yellow-brown == 0){
            return new int[]{h_w/2+1, h_w/2-1};
        }
        
        for(int l: list){
            h = l;
            w = h_w - h;
            
            if(h*w == yellow+brown)
                break;
        }
        
        return new int[]{w,h};
    }
}

// 2(h+w) = b+4;

// h+w = (b+4)/2;

//  h * w = brown + yellow;



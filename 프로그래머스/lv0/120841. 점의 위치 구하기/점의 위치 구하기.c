#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// dot_len은 배열 dot의 길이입니다.
int solution(int dot[], size_t dot_len) {
    int answer = 0;
    int x = dot[0];
    int y = dot[1];
    if ((x > 0) && (y>0) ) answer = 1;
    else if (x>0 && y<0) answer = 4;
    else if (x<0 && y<0) answer = 3;
    else answer =2;
    return answer;
}
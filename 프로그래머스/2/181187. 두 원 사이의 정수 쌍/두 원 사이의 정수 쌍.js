function solution(r1, r2) {
    let count = 0;
    
    for (let y = 1; y <= r2; y++) {
        // 큰 원(r2)의 해당 y값에서 가능한 최대 정수 x값 계산
        const xR2 = Math.floor(Math.sqrt(r2 * r2 - y * y));
        
        // 작은 원(r1)이 존재할 경우 해당 y값에서 가능한 최대 정수 x값 계산
        const xR1 = y >= r1 ? 0 : Math.ceil(Math.sqrt(r1 * r1 - y * y));
        
        // 해당 y에 대해 큰 원과 작은 원 사이에 있는 정수 좌표 개수를 카운트
        count += (xR2 - xR1 + 1); // +1을 하는 이유는 양 끝의 점들도 포함해야 하므로
    }
    
    // 원점 좌표와 경계선 위에 있는 점들을 포함하기 위해 계산된 점에 4배를 곱함
    // 사분면의 대칭성을 고려하여
    return count * 4;
}

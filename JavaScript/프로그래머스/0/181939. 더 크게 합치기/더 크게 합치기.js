function solution(a, b) {
    const x = Number([a, b].join(''));
    const y = Number([b, a].join(''));
    return Math.max(x, y);
}
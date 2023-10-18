function solution(a, b) {
    small=Math.min(a,b)
    big=Math.max(a,b)
    const sumOfZeroToSmall = (small*(small+1))/2
    const sumOfZeroToBig = (big*(big+1))/2
    return sumOfZeroToBig-sumOfZeroToSmall+small;
}
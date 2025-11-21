function solution(num_list) {
    const a = num_list.reduce((acc, num) => acc * num);
    const b = num_list.reduce((acc, num) => acc + num);
    return Number(a < Math.pow(b, 2));
}
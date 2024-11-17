function solution(array) {
    array.sort((elem1,elem2) => elem1-elem2)
    return array[Math.floor(array.length / 2)]
}
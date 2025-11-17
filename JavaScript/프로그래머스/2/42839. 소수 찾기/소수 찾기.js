class Sieve {
    static MAX_COUNT = 9999999;
    static IS_PRIMES = Array.from({length: this.MAX_COUNT}, () => true);
    
    static init() {
        this.IS_PRIMES[0] = false;
        this.IS_PRIMES[1] = false;
        
        for (let i = 2; i < Math.sqrt(this.MAX_COUNT) + 1; i++) {
            for (let j = i * i; j < this.MAX_COUNT; j+=i) {
                this.IS_PRIMES[j] = false;
            }
        }
    }
    
    static checkIsPrime(num) {
        try {
            return this.IS_PRIMES[num]    
        } catch {
            // console.log(num);
            return false;
        }
        
    }
}

function getAllSplits(numbers) {
    const arr = numbers.split('');
    const result = new Set();
    
    function dfs(str, visited, maxLength) {
        if (str.length !== 0) {
            result.add(Number(str));
        }
        
        for (let i = 0; i < maxLength; i++) {
            if (visited[i]) {
                continue;
            } else {
                visited[i] = true;
                dfs(str+arr[i], visited, maxLength)
                visited[i] = false;
            }
        }
    }
    
    const maxLength = arr.length;
    dfs('', Array.from({length: maxLength}, () => false),maxLength);
    
    return Array.from(result);
}

function solution(numbers) {
    Sieve.init();
    const allSplits = getAllSplits(numbers);
    const isPrimes = allSplits.map((num) => Sieve.checkIsPrime(num));
    return isPrimes.filter(Boolean).length
}

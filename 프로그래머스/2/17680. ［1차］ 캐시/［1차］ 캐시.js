class Cache{
    constructor(cacheSize){
        this.size = cacheSize
        this.storage = []
    }
    
    request(value){
        let responseTime = 0
        if(this.storage.includes(value)){
            const idx = this.storage.indexOf(value);
            this.storage.splice(idx, 1);
            this.storage.unshift(value)
            responseTime = 1 
        }
        else {
            this.storage.unshift(value)
            responseTime =  5
        }
        this.clamp()
        return responseTime
    }
    
    clamp(){
        this.storage = this.storage.slice(0, this.size)
    }
    
}

function solution(cacheSize, cities) {
    const cache = new Cache(cacheSize)

    let answer = 0
    cities.forEach((city)=>{
        city = city.toUpperCase()
        answer += cache.request(city)
    })
    
    return answer;
}
class Dictionary{
    constructor(){
        this.di = {}
        for(let i =0; i<26; i++){
            const char = String.fromCharCode('A'.charCodeAt() + i)
            this.di[char] = i + 1
        }
        
        this.idx = 26
    }
    
    isIn(str){
        return (str) in this.di
    }
    
    addWord(str){
        ++this.idx
        this.di[str] = this.idx
    }
    
    getIdx(str){
        return this.di[str]
    }
}
function solution(msg) {
    
    const di = new Dictionary()
    
    const msgSize = msg.length
    const splited = msg.split('')
    
    const words = []
    
    for(let i = 0; i<msgSize; i++) {
        let word = msg[i]
        
        
        while(di.isIn(word)){
            ++i
            if(msgSize <= i) break;
            word += msg[i]
        }
        
        if(di.isIn(word)){
            words.push(word)
        }
        else {
            di.addWord(word)
            words.push(word.slice(0,word.length-1))
            i -= 1
        }
    }
    
    return words.map(word => di.getIdx(word))
}
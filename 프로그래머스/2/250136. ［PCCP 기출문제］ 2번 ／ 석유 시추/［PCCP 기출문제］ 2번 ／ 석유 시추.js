function solution(land) {
    const MaxRow = land.length
    const MaxCol = land[0].length
    
    let id = 100;
    let sizeMap = {}
    
    land.forEach((row,rowIdx)=>{
        row.forEach((col,colIdx)=>{
            if(land[rowIdx][colIdx]===1){
                const size = BFS(rowIdx, colIdx, id)
                sizeMap[id] = size
                id++;
            }
        })
    })
    
    
    const eachCol = []
    for(let col = 0; col<MaxCol; col++){
        let tmp = []
        for(let row = 0; row<MaxRow; row++){
            if(land[row][col] !== 0 && land[row][col] !== 1)
                tmp.push(land[row][col])
        }
        tmp = Array.from(new Set(tmp))
        eachCol.push(tmp)
    }
    
    const amounts = eachCol.map((oilAreas)=>{
        return oilAreas.reduce((acc, elem)=>{
            acc += sizeMap[elem]
            return acc
        },0)
    })
    return (Math.max(...amounts))

    
    
    function BFS(x,y, id){
        let areaSize = 1
        
        const dx = [0,0,-1,1]
        const dy = [1,-1,0,0]
        
        const que = [[x,y]]
        land[x][y] = id
        
        while(que.length !== 0){
            const [cx,cy] = que.shift()
            for(let i =0; i<4;i++){
                const [nx, ny] = [cx+dx[i], cy+dy[i]]
                if(nx < 0 || MaxRow <= nx) continue
                if(ny < 0 || MaxCol <= ny) continue
                if(land[nx][ny] === 1){
                    que.push([nx,ny])
                    land[nx][ny] = id
                    areaSize++;
                }
            }
        }
        return areaSize
    }
}
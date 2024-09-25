function solution(m, n, startX, startY, balls) {
    const answer = []
    balls.forEach(([targetX, targetY])=>{
        if(startY===targetY){
            // 타겟이 왼편에 있는 경우,
            if(targetX < startX){
                const [mrx,mry] = getPointMirorRight(m,n,targetX,targetY)
                const mrd = getDistance(startX, startY, mrx, mry)
            
                const [mux,muy] = getPointMirorUp(m,n,targetX,targetY)
                const mud = getDistance(startX, startY, mux, muy)
                    
                const [mdx,mdy] = getPointMirorDown(targetX,targetY)
                const mdd = getDistance(startX, startY, mdx, mdy)
            
                answer.push(Math.min(mrd, mud, mdd))
            }
            // 타겟이 오른편에 있는 경우,
            if(startX < targetX){
                const [mlx,mly] = getPointMirorLeft(targetX,targetY)
                const mld = getDistance(startX, startY, mlx, mly)
            
                const [mux,muy] = getPointMirorUp(m,n,targetX,targetY)
                const mud = getDistance(startX, startY, mux, muy)
                    
                const [mdx,mdy] = getPointMirorDown(targetX,targetY)
                const mdd = getDistance(startX, startY, mdx, mdy)
            
                answer.push(Math.min(mld, mud, mdd))
            }
        }
        else if(startX === targetX){
            // 타겟이 위에 있는 경우,
            if(startY < targetY){
                const [mlx,mly] = getPointMirorLeft(targetX,targetY)
                const mld = getDistance(startX, startY, mlx, mly)
                
                const [mrx,mry] = getPointMirorRight(m,n,targetX,targetY)
                const mrd = getDistance(startX, startY, mrx, mry)
                    
                const [mdx,mdy] = getPointMirorDown(targetX,targetY)
                const mdd = getDistance(startX, startY, mdx, mdy)
            
                answer.push(Math.min(mld, mrd, mdd))
            }
            // 타겟이 아래에 있는 경우,
            if(targetY < startY){
                const [mlx,mly] = getPointMirorLeft(targetX,targetY)
                const mld = getDistance(startX, startY, mlx, mly)
                
                const [mrx,mry] = getPointMirorRight(m,n,targetX,targetY)
                const mrd = getDistance(startX, startY, mrx, mry)
                
                const [mux,muy] = getPointMirorUp(m,n,targetX,targetY)
                const mud = getDistance(startX, startY, mux, muy)
            
                answer.push(Math.min(mld, mrd, mud))
            }
        }
        else {
            const [mlx,mly] = getPointMirorLeft(targetX,targetY)
            const mld = getDistance(startX, startY, mlx, mly)
            
            const [mrx,mry] = getPointMirorRight(m,n,targetX,targetY)
            const mrd = getDistance(startX, startY, mrx, mry)
            
            const [mux,muy] = getPointMirorUp(m,n,targetX,targetY)
            const mud = getDistance(startX, startY, mux, muy)
                    
            const [mdx,mdy] = getPointMirorDown(targetX,targetY)
            const mdd = getDistance(startX, startY, mdx, mdy)
            
            answer.push(Math.min(mld, mrd, mud, mdd))
        }
    })
    
    return answer;
}

function getPointMirorLeft(x,y){
    return [-x,y]
}
function getPointMirorRight(m,n,x,y){
    return [2*m-x, y]
}
function getPointMirorUp(m,n,x,y){
    return [x, 2*n-y]
}
function getPointMirorDown(x,y){
    return [x,-y]
}

function getDistance(x1,y1,x2,y2){
    return Math.floor(Math.pow(x1-x2,2) + Math.pow(y1-y2,2))
}
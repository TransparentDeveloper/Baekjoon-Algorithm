def solution(sticker):
    if len(sticker) < 3:
        return max(sticker)
    
    dp1 = [0 for _ in sticker]
    dp2 = [0 for _ in sticker]
    
    # 첫번째 스티커를 떼면?
    dp1[0] = dp1[1] = sticker[0]
    for i in range(2,len(sticker)-1):
        dp1[i] += max(dp1[i-2]+sticker[i],dp1[i-1])
    # 첫번째 스티커를 안 떼면?
    dp2[1] = sticker[1]
    for i in range(2,len(sticker)):
        dp2[i] += max(dp2[i-2]+sticker[i],dp2[i-1])
    return max(max(dp1),max(dp2))
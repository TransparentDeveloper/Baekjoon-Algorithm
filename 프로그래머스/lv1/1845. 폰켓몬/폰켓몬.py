
def solution(nums):
    dic = dict()
    for nu in nums:
        dic[nu] = dic.get(nu,0) + 1
        
    select_num = len(nums)//2
    kind_num = len(dic.keys())
    
    if select_num <= kind_num:
        return select_num
    return kind_num
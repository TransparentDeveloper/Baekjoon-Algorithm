def solution(phone_book):
    len_list = set(map((lambda x: len(x)), phone_book))
    dic = {}
    for phone in phone_book:
        for le in len_list:
            if len(phone) < le:
                continue
            elif len(phone) >= le:
                dic[phone[:le]] = dic.get(phone[:le],0) + 1          
                
    for phone in phone_book:
        if phone in dic.keys() and dic[phone] >= 2:
            return False
    return True
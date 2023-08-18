from collections import defaultdict
def solution(phone_book):
    if len(phone_book) == 1:
        return True
    lengths = set([len(phone) for phone in phone_book])
    di = defaultdict(int)
    for phone in phone_book:
        for length in lengths:
            if len(phone) >= length:
                di[phone[:length]]+=1
    for phone in phone_book:
        if di[phone] >= 2:
            return False
    return True
import math
def solution(n, words):
    # 마지막 문자 매치가 안될 경우
    # 이전에 등장했던 문자가 사용된 경우
    # 한글자인 경우
    copy_words = []
    def checkNotMatch(prev,word):
        return True if prev[-1] != word[0] else False
    def checkItWas(word):
        return True if word in copy_words else False
    def checkOneWord(word):
        return True if len(word) == 1 else False
    wrongIdx = -1
    for idx,word in enumerate(words):
        if idx!=0 and checkNotMatch(words[idx-1],word):
            wrongIdx = idx
            break
        if checkItWas(word) or checkOneWord(word):
            wrongIdx = idx
            break
        copy_words.append(word)
    if wrongIdx == -1: return [0,0] 
    wrongIdx+=1
    answer_num = wrongIdx%n if wrongIdx%n!=0 else n
    answer_order = math.ceil(wrongIdx/n)
    return [answer_num ,answer_order]
    
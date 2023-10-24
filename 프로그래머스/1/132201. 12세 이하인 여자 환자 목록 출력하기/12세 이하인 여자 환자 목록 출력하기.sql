-- 코드를 입력하세요
SELECT PT_NAME,	PT_NO, GEND_CD, AGE, IFNULL(TLNO,"NONE") from PATIENT as P where P.AGE <= 12 AND P.GEND_CD = "W" order by P.age desc, P.PT_NAME;
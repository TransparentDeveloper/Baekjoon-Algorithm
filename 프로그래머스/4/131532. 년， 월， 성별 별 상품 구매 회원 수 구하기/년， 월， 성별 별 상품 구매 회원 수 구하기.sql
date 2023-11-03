SELECT YEAR, MONTH, GENDER, COUNT(O.USER_ID) AS USERS
    FROM
    (SELECT USER_ID, YEAR(SALES_DATE) AS YEAR, MONTH(SALES_DATE) AS MONTH
        FROM ONLINE_SALE
        GROUP BY USER_ID, YEAR, MONTH) AS O
    LEFT JOIN
        (SELECT USER_ID, GENDER FROM USER_INFO) AS U
    ON O.USER_ID = U.USER_ID
    WHERE  GENDER IS NOT NULL
    GROUP BY YEAR, MONTH, GENDER
    ORDER BY YEAR,MONTH,GENDER
    
    
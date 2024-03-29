SELECT I.FOOD_TYPE,REST_ID,REST_NAME,FAVORITES
    FROM 
        REST_INFO AS I 
        RIGHT JOIN
            (SELECT FOOD_TYPE, MAX(FAVORITES) AS MAX_FAV
                FROM REST_INFO
                GROUP BY FOOD_TYPE) AS R
        ON I.FOOD_TYPE = R.FOOD_TYPE AND I.FAVORITES = R.MAX_FAV
    ORDER BY FOOD_TYPE DESC
        

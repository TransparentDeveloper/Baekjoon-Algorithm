SELECT DISTINCT J.FLAVOR from ICECREAM_INFO JOIN FIRST_HALF as J WHERE J.TOTAL_ORDER > 3000 AND J.FLAVOR IN ('strawberry', 'melon') ORDER BY J.TOTAL_ORDER DESC
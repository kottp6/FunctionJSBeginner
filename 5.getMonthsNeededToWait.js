Write a function name getMonthsNeededToWait that receives 2 numbers as parameters, representing the index of two months.

The function should return the number of months we have to wait, to get from the first month to the second one.

Example 1
Input
index1 = 1
index2 = 3
Output
2

index1 = 11
index2 = 0
Output 
1

function getMonthsNeededToWait(index1, index2) {
    if(index2 >= index1)
    {
        return index2 - index1
    }
    else{
        return 12 - index1 + index2
    }
}

export { getMonthsNeededToWait };

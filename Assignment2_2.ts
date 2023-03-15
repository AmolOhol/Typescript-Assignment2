
function Summation(Arr : number[]):number
{
    var Ans=0;
    var i=0

    for(i=0;i<Arr.length;i++)
    {
        Ans=Ans+Arr[i]
    }

    return Ans
}


var Num : number[] = [23,6,7,4,5,7]
var Ret : number=0

Ret=Summation(Num)

console.log("Addition og given array is "+Ret)

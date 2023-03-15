
function Maximum(Arr : number[]):number
{
    var Ans=0
    var i=0

    for(i=0;i<Arr.length;i++)
    {
        if(Ans<Arr[i])
        {
            Ans=Arr[i]
        }
    }

    return Ans

}

var Num : number[] = [23,89,6,29,56,45,77,32]
var Ret=0

Ret = Maximum(Num)

console.log("The maximum number in array is "+Ret)

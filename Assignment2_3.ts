
function MaximumSecond(Arr : number[]):number
{
    var Second:number=0
    var i=0

    Arr.sort()

   

    for(i=0;i<Arr.length;i++)
    {
        if(i==Arr.length-2)
        {
            Second=Arr[i]
        }
    }

    return Second
}

var Num : number[]= [23,89,6,29,85,56,45,77,32]

var Ret=0

Ret=MaximumSecond(Num)

console.log("Second Maximum Number is "+Ret)

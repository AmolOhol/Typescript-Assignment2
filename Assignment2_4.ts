
function ChkArmstrong(No : number) : number
{
    var Sum : number = 0
    var Digit : number =0

    while(No !=0)
    {
        Digit = No%10
        Sum=Sum +(Digit*Digit*Digit)
        No=parseInt(No/10)

        console.log(Digit,Sum,No)
    }
    
    return Sum
}


var Num: number=153
var Ret : number=0

Ret = ChkArmstrong(Num)

if(Ret==Num)
{
    console.log("Given number is Armstrong number")
}
else{
    console.log("Given number is not Armstrong number")
}

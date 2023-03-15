
function ChkString(Str : string) :boolean
{

    var s : string[] = Str.split(" ")

    for(var i=0;i<s.length;i++)
    {
        if(s[i].localeCompare("Marvellous")==0)
        {
            return true
        }
    }
    return false
}

var Str : string="Pune Kothrud Marvellous Infosystems"
var Ret : boolean = false

Ret = ChkString(Str)

if(Ret==true)
{
    console.log("The Marvellous word found")

}
else{
    console.log("The Marvellous word not found")
}

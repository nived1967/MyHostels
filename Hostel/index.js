function getSelectValue()
{
    let selectedValue=document.getElementById("College").value;
    localStorage.setItem("ddvalue",selectedValue);
    
    if(selectedValue=="CET")
    {
        location.replace('first.html');
    }
    if(selectedValue=="GECT")
    {
        location.replace('hlistgec.html');
    }

}
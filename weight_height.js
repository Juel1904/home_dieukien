function checkbmi()
{
    var heightin = document.getElementById("heiinput").value;
    var weightin = document.getElementById("weiinput").value;
    var bmi = parseInt(weightin) / Math.pow(parseFloat(heightin),2);
    if(bmi < 16)
    {
        document.getElementById("result").innerHTML = "Gầy độ III";
    }
    else if (bmi >= 16 && bmi < 17)
    {
        document.getElementById("result").innerHTML = "Gầy độ II";
    }
    else if (bmi >= 17 && bmi < 18.5)
    {
        document.getElementById("result").innerHTML = "Gầy độ I";
    }
    else if (bmi >= 18.5 && bmi < 25)
    {
        document.getElementById("result").innerHTML = "Bình thường";
    }
    else if (bmi >= 25 && bmi < 30)
    {
        document.getElementById("result").innerHTML = "Thừa cân";
    }
    else if (bmi >= 30 && bmi < 35)
    {
        document.getElementById("result").innerHTML = "Béo phì độ I";
    }
    else if (bmi >= 35 && bmi < 40)
    {
        document.getElementById("result").innerHTML = "Béo phì độ II";
    }
    else 
    {
        document.getElementById("result").innerHTML = "Béo phì độ III";
    }

}
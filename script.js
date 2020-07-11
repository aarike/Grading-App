const calcy = () => {
    let math = document.getElementById('math').value;
    let eng = document.getElementById('eng').value;
    let phy = document.getElementById('phy').value;
    let chem = document.getElementById('chem').value;

    
    
    if(math > 100 || eng > 100 || phy > 100 || chem > 100){
        alert("please Enter mark in the range of 100");
    }else{
        var totalScore = parseFloat(math) + parseFloat(eng) + parseFloat(phy) + parseFloat(chem);
    }

    let per = (totalScore/400) * 100;
    
    if(per <= 100 && per >= 80){
        grade = 'A';
    }else if(per <= 79 && per >= 60){
        grade = 'B';
    }else if(per <= 59 && per >= 40){
        grade = 'C';
    }else{
        grade = 'F';
    }

    document.getElementById('data').innerHTML = `${totalScore} out of 400 and percentage is ${per}%, your grade is ${grade}.`
}
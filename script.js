let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge
let myGrade
function marks(){
    if(inputGrade>=79){
        myGrade = 'A'
    }
    else if(inputGrade>=60 && inputGrade <=78){
        myGrade = 'B'
    }
    else if(inputGrade>=49 && inputGrade <=59){
        myGrade = 'C'
    }
    else if(inputGrade>=40 && inputGrade <=48){
        myGrade = 'D'
    }
    else if(inputGrade<=39){
        myGrade = 'E'
    }
    return myGrade;
}

finalOutput = marks();
document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge
let fast
function speed(){
    if(inputSpeed<=70){
        fast = 'OK'
    }
    else if(inputSpeed >=71 && inputSpeed<=79){
        fast = '1 Points'
    }
    else if(inputSpeed >=80 && inputSpeed<=84){
        fast = '2 Points'
    }
    else if(inputSpeed >=85 && inputSpeed<=89){
        fast = '3 Points'
    }
    else if(inputSpeed >=90 && inputSpeed<=94){
        fast = '4 Points'
    }
    else if(inputSpeed >=95 && inputSpeed<=99){
        fast = '5 Points'
    }
    else if(inputSpeed >=100 && inputSpeed<=104){
        fast = '6 Points'
    }
    else if(inputSpeed >=105 && inputSpeed<=109){
        fast = '7 Points'
    }
    else if(inputSpeed >=110 && inputSpeed<=114){
        fast = '8 Points'
    }
    else if(inputSpeed >=115 && inputSpeed<=119){
        fast = '9 Points'
    }
    else if(inputSpeed >=120 && inputSpeed<=124){
        fast = '10 Points'
    }
    else if(inputSpeed >=125 && inputSpeed<=129){
        fast = '11 Points'
    }
    else if(inputSpeed >=130){
        fast = 'License Suspended'
    }
    
    return fast;
}


finalOutput=speed();
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge
let cash
function mapesa(){
    if(inputSalary<=24000){
        cash = inputSalary * 0.1
    }
    else if(inputSalary>=24001 &&inputSalary<=32333){
        cash = inputSalary * 0.25
    }
    else if(inputSalary>=32333){
        cash = inputSalary * 0.25
    }

return cash
}

finalOutput =mapesa();
document.getElementById('salary-id').append(finalOutput)
        
})
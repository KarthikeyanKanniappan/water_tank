
// for creating charts
let createChart=(xaxis,output,id)=>{
    let mainNode= document.getElementById(id)
    let chart=echarts.init(mainNode,null,{
        renderer:"canvas",
        useDirtyRect:false
    })
    let final
    final={
        xAxis:{
            type:"category",
            data: xaxis
        },
        yAxis:{
            
        },
        series:[{
            data:output,
            type:"bar"
        }]
    }
    if(final && typeof final === "object"){
        chart.setOption(final)
    }
   
}



// fetch data from the input field
let fetchArray =()=>{
    let element= document.getElementById("arr")
    let inputArr=element.value.split(",").map(el=> +el)
    let walls=wall(inputArr)
}

const countUnit=(final)=>{
    let add=0
    for(let char of final){
        if(char != "-"){
            add += char
        }
    }
    return add
}

let wall=(wallsArr)=>{
    let case1=[]
    let case2=[]
    let case_n=[]
    let lastValue_case1=0
    let lastValue_case2=0
    let result=[]
    
for(let Char of wallsArr){
    if(Char == 0) {
        case1.push(lastValue_case1)
    } else{
        case1.push("-");
        lastValue_case1=Char
    } 
}

for (let  i = wallsArr.length-1; i >= 0; i--) {
    let el = wallsArr[i];
    if (el== 0) {
        case2[i]=lastValue_case2
    }else{
        case2[i]=('-')
        lastValue_case2=el
    }
}

for(let i=0;i< wallsArr.length;i++){
    let caseOne= case1[i]
    let secondOne= case2[i]
    console.log(caseOne,secondOne)
    if(caseOne == "-"){
        case_n[i]="-"
    }else{
        case_n[i]= caseOne - secondOne > 0 ? secondOne :caseOne
    }
}

for(let i=0;i< wallsArr.length;i++){
    let el= wallsArr[i]
    if(el == 0){
        result.push({
            value: case_n[i],
            itemStyle: {
                color: '#0000FF'
            }
        })
    }else{
        result.push({
            value: el,
            itemStyle: {
                color: '#FFFF00'
            }
        })
    }
}

createChart(wallsArr,result,"chart")
let span= document.getElementById("unit")
span.innerHTML= `Output is ${countUnit(case_n)} ` 
}











let num1Element=document.getElementById('num1') as HTMLInputElement;
let num2Element=document.getElementById('num2') as HTMLInputElement;
let buttonElement=document.querySelector('button') as HTMLButtonElement;
let numberArray:Array<number>=[];
let textArray:string[]=[];
type numOrString=number| string;
interface objres{
    val:number;
    timeStamps:Date
}
function add(num1:numOrString, num2:numOrString) {
    if(typeof num1 ==='number' && typeof num2==='number'){
        return num1+num2;
    }else if(typeof num1 ==='string' && typeof num2==='string'){
        return num1 + num2;
    }
    return +num1 + +num2;
}


function stringObject(resultObj:objres){
    console.log(resultObj.val);
    
}
buttonElement.addEventListener('click',()=>{
    const num1=num1Element.value;
    const num2=num2Element.value;
    const result=add(+num1,+num2);
    const resultString=add(num1,num2);
    stringObject({val:result as number,timeStamps:new Date()});
    numberArray.push(result as number);
    console.log(numberArray);
    textArray.push(resultString as string);
    console.log(textArray);
    
})
const promise1=new Promise<string>((resolve, reject) => {
    setTimeout(()=>{
        resolve("It's worked");
    },3000);
})
promise1.then((res)=>{console.log(res)  });

function soNguyenTo(number){
if(number<2){return false};
for(let i=2; i<number; i++){
    if(number%i===0){return false}
}
return true;
};
console.log(soNguyenTo(7))

const inputA=document.getElementById('inputA');
const inputB=document.getElementById('inputB');
const button=document.getElementById('button');
let result=0;
const showing=document.getElementById('showKetQua')
button.addEventListener('click',function(){
    let numberA= Number(inputA.value)
    let numberB= Number(inputB.value)
    if(!Number.isInteger(numberA)&&!Number.isInteger(numberB)){
        showing.innerHTML=`Ban vừa nhập sai Số A và B. Số A và B phải là số Nguyên`;
        return;
    }
    if(numberB<numberA){
        showing.innerHTML=`Ban nhập số A phải nhỏ hơn số B`;
        return false;
    }
    for(let i=numberA; i<=numberB; i++){
        if(soNguyenTo(i)){
            result= result+i
        }
    }
    showing.innerHTML=result;
})
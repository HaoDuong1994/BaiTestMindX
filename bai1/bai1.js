function soNguyenTo(number){
if(number<2){return false};
for(let i=2; i<number; i++){
    if(number%i===0){return false}
}
return true;
};
console.log(function soNguyenTo(4))

function checkSNT(number){
    if(number <2){return false};
    for(i=2; i<number; i++){
        if(number%i===0){return false}
    }
    return true;
}
console.log(checkSNT(23))
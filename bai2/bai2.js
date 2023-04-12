const showing=document.getElementById('showing')
function numberOneTriangle(number){
    for(let i=1; i<=number; i++){
        let result=''
        for(j=0; j<i; j++){
            result=result+'*';
        };
        console.log(result)
        document.write(`${result} <br>`)
    }
}
numberOneTriangle(4)
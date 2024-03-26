let num = 100000;

let numPerfeito = [];


for (let i = 1; i <= num; i++){
    
    let somaDivisores = 0;

    for (let k = 1; k < i; k++ ){
        if(i % k === 0){
            somaDivisores += k;
        }
    }

    if (somaDivisores === i){
        numPerfeito.push(i)
    }
}

document.write("Números perfeitos até o limite de", num, ": ");
document.write(numPerfeito, ', ');
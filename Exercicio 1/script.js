let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

document.write("Numeros pares: ")

for (let i = 1; i < num.length; i++){
    if (i % 2 === 0){
        document.write(i, ', ')
    }
}
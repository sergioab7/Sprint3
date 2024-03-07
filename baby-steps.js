const t = process.argv;

if(t.length > 2){
    const numeros = t.slice(2);
    let suma = 0;
    numeros.forEach(num => {
        let n = parseInt(num);
        suma +=n;
    })
    console.log(suma);
}
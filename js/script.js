

for (var i=1; i<=100;i++)
{   
    if (!(i%3)&&!(i%5))
        console.log(" fizzbuzz ")
    if (!(i%3))
        console.log(" fizz");
    if (!(i%5))
        console.log(" buzz");
    
    if (i%5&&i%3)
        console.log(i,"\n");
}
    











/*
var numero;

for (var i=0 ; i<5  ; i++)
    numero += parseInt(prompt("inserisci valore da sommare inserisci 0 per uscire","valore"));
    
    console.log(numero);
    */










/*var parola1="vuota",parola2="vuota";
    console.log(parola1==="vuota");

for (0; parola1=="vuota"&& isNaN(parola1);0)
    parola1 = prompt("inserisci parola1","vuota");
for (0; parola2=="vuota"&& isNaN(parola2);0)
    parola2 = prompt("inserisci parola2","vuota");

if (parola1.length === parola2.length){
    console.log(parola2+" è uguale a "+parola1);
} 
else
    if (parola1.length < parola2.length)
        console.log(`${parola1} è minore di ${parola2}`);
    else
        console.log(`${parola2} è minore di ${parola1}`);   */  

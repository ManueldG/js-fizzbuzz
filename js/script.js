var y;


for (var i=0; i<10;i++)
{
    
    for(j=1; j<=10; j++)
    {   
         y=j+i*10;
        
        console.log(y);
        document.getElementById("numero"+i).innerHTML+=" ";
        if (!(y%3)&&!(y%5))
            console.log(" fizzbuzz ")
        if (!(y%3))
            document.getElementById("numero"+i).innerHTML+=" fizz";
        if (!(y%5))
            document.getElementById("numero"+i).innerHTML+="buzz ";
        
        if (y%5&&y%3)
            document.getElementById("numero"+i).innerHTML+= y;
        document.getElementById("numero"+i).innerHTML+=" ";
    }
    
}

;
        











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

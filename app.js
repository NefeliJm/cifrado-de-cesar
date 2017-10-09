function cipher (palabra) {
prompt("ingresa una frase");
newcipher = "";
for (i = 0;i < palabra.length;i++ ){
    var one = palabra.charCodeAt
    if((palabra[i] > 65 && palabra[i] < 90) || (palabra[i] > 97 && palabra[i] < 122)){ 
        palabra[i]++;               
    } 
    else if(palabra[i]==90) 
        palabra[i]='A'; 
    else if(palabra[i]==122) 
        palabra[i]='a'; 
} 

return newcipher; 
}
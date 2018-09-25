//Zadatak 1
function prvi(string1,string2){

    novi = string1.substr(string1.length - string2.length);

    if(novi == string2){
        return true;
    }
    else{
        return false;
    }

}

console.log(prvi("Petar","ar"));

//zadatak 2

function drugi(string1, x){
    novi = string1.slice(x);
    novi2=novi.concat("...");
    console.log(novi2);
}
drugi("elmir",2);

//zadatak 3
//console.log(String.fromCharCode(122-25));
//console.log("abgfxyz".charCodeAt(6))
function treci(string1){
    var novi="";
    for(var i=0;i<string1.length;i++){
        if(string1.charCodeAt(i)>122-13){
            novi=novi.concat(String.fromCharCode((string1.charCodeAt(i)-26+13)));
        }
        else{
            novi=novi.concat(String.fromCharCode((string1.charCodeAt(i)+13)));
        }
    }
    console.log(novi);
}
treci("abgfxyz");

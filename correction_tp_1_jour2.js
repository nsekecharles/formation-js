
// Question 1:
var karine = {
    prenom: 'Karine', 
    dateDeNaissance: new Date(1991, 4, 16), 
    moyenne: 12
   };
var celia = {
    prenom: 'Célia', 
    dateDeNaissance: new Date(1995, 5, 9), 
    moyenne: 14
   };
var christophe =  {
    prenom: 'Christophe', 
    dateDeNaissance: new Date(1997, 9, 9), 
    moyenne: 15
   };


// Question 2 :

var personnes = new Array(karine, celia, christophe);


// Question 3 : 
console.log('Question 3')
for(var i = 0; i < personnes.length; i++) {
var today = new Date();
console.log(personnes[i].prenom + ' : ' + (today.getFullYear() - personnes[i].dateDeNaissance.getFullYear()));
}


// Question 4 : 
console.log('Question 4')
for(var i = 0; i < personnes.length; i++) {
var today = new Date();
if(today.getFullYear() - personnes[i].dateDeNaissance.getFullYear() > 25) {
console.log(personnes[i].prenom);
}
}

// Question 5 : 
console.log('Question 5')
for(var i = 0; i < personnes.length; i++) {
if(personnes[i].prenom.charAt(0) == 'C') {
console.log(personnes[i].prenom);
}
}


// Question 6 :
console.log('Question 6')
var sommeMoyennes = 0;
for(var i = 0; i < personnes.length; i++) {
sommeMoyennes += personnes[i].moyenne;
}

var moyenne = sommeMoyennes / personnes.length;
console.log('la moyenne des moyennes : ', moyenne);

// Question 7 :
console.log('Question 7')
for(var i = 0; i < personnes.length; i++) {
if(personnes[i].moyenne < moyenne) {
console.log(personnes[i]);
}
}

// Question 8
console.log('Question 8')
for(var i = 0; i < personnes.length; i++) {
delete personnes[i].moyenne;
}
console.log(personnes);

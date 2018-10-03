
// Question 1:
var karine = {
              premom: 'Karine', 
              dateDeNaissance: new Date(1991, 4, 16), 
              moyenne: 12
             };
var Celia = {
              premom: 'Karine', 
              dateDeNaissance: new Date(1995, 5, 9), 
              moyenne: 12
             };
var Christophe =  {
              premom: 'Christophe', 
              dateDeNaissance: new Date(1997, 9, 9), 
              moyenne: 12
             };


// Question 2 :

var personnes = new Array(Karine, Celia, Christophe);


// Question 3 : 

for(var i = 0; i < personnes.length; i++) {
  var today = new Date();
  console.log(personnes[i].prenom + ' : ' + today.getFullYear() - personnes[i].dateDeNaissance.getFullYear());
}


// Question 4 : 

for(var i = 0; i < personnes.length; i++) {
  var today = new Date();
  if(today.getFullYear() - personnes[i].dateDeNaissance.getFullYear() > 25) {
      console.log(personnes[i].prenom);
  }
  
  // Question 5 : 
  for(var i = 0; i < personnes.length; i++) {
    if(personnes[i].prenom.charAt(0) === 'C') {
      console.log(personnes[i].prenom);
    }
  }


// Question 6 :
  for(var i = 0; i < personnes.length; i++) {
    
  }
  



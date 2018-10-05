// récupére l'écran
var ecran = document.getElementById('ecran');

// créer une fonction qui prend en paramètre un bouton et met
// à jour l'écran


var resultat = 0;
var operation = '';
var valeurPrec = 0;

function effaceEcran() {
	ecran.value = '';
}

function clickBouton() {
	var boutonClicke = this;
	if(boutonClicke.value == 'c') {
		effaceEcran();
	
	} else if(boutonClicke.value == '=') {
		switch(operation) {
			case '+':
			resultat = valeurPrec + parseInt(ecran.value);
			break;
			case '-':
			break;
			case 'x':
			break;
			case '/':
			break;
			default:
				// TODO message d'erreur
		}
		ecran.value = resultat;
		valeurPrec = parseInt(ecran.value);
	
	} else if(boutonClicke.value == '+' || boutonClicke.value == '-' || boutonClicke.value == '/' || boutonClicke.value == 'x') {
		operation = boutonClicke.value;
		valeurPrec = 
		effaceEcran();
	
	} else {
		ecran.value = ecran.value + boutonClicke.value;
	}
}

// récupération de tous les boutons 
var lesBoutons = document.getElementsByTagName('button');

for (var i = 0; i < lesBoutons.length; i++) {
	lesBoutons[i].addEventListener('click', clickBouton);
}



var textDynamique = document.getElementById("text_dynamique");
var typeText = document.getElementById('typed_text');

textDynamique.addEventListener('keyup', functionOnKeyUp);

function functionOnKeyUp() {
	typeText.innerHTML = textDynamique.value;
}

var monBouton = document.getElementById('boutton');

monBouton.addEventListener('click', fonctionAExcuterAuClick);

function fonctionAExcuterAuClick() {
	alert(textDynamique.value)
}

var monBouton2 = document.getElementById('boutton2');
monBouton2.addEventListener('click', functionClickBouton2);

var increment = 1;
function functionClickBouton2() {
	//block a cloner
	var block = document.getElementById('block');
	var cloneBlock = block.cloneNode(true);
	cloneBlock.id = cloneBlock.id + increment;
	document.getElementsByTagName('body')[0].appendChild(cloneBlock);

	var textDynamiqueNouveauClone = cloneBlock.querySelector('#text_dynamique');
	var nouveauTypeText = cloneBlock.querySelector('#typed_text');
	
	textDynamiqueNouveauClone.addEventListener('keyup', function() {
		nouveauTypeText.innerHTML = textDynamiqueNouveauClone.value;
	});

	textDynamiqueNouveauClone.id = textDynamiqueNouveauClone.id + increment;
	nouveauTypeText.id = nouveauTypeText.id + increment;
	
	increment++;
}

const sayi1 = document.getElementById('sayi1');
const sayi2 = document.getElementById('sayi2');

const sonuc = document.getElementById('sonuc');

function bol(){
	sonuc.innerHTML = sayi1.value * sayi2.value;
}
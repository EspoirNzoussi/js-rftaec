// Exercice 3
const appDiv = document.getElementById('app');

// Construction du formulaire
const form = document.createElement('form');

const input = document.createElement('input');
input.style.display = 'block';
input.style.fontSize = '1rem';
input.style.borderRadius = '0.375rem';
input.style.color = '#212529';
input.style.border = '1px solid #ced4da';
input.style.padding = '.375rem 0.75rem';
input.style.width = '220px';
input.placeholder = 'Entrer les lettres';
input.maxLength = 20;

form.appendChild(input);

const button = document.createElement('button');
button.style.marginTop = '1.2rem';
button.style.cursor = 'pointer';
button.style.padding = '.375rem 0.75rem';
button.style.backgroundColor = '#0dcaf0';
button.style.fontSize = '1rem';
button.style.fontWeight = '400';
button.style.lineHeight = '1.5';
button.style.borderRadius = '0.375rem';
button.style.borderWidth = '1px';
button.style.borderColor = '#0dcaf0';
button.type = 'submit';
button.textContent = 'Cliquer ici';

form.appendChild(button);

const paragraph = document.createElement('p');
paragraph.style.marginTop = '1.2rem';
paragraph.style.fontWeight = '400';

appDiv.appendChild(form);
appDiv.appendChild(paragraph);

// Implementation de la fonctionalité
const VOYELLES = ['A', 'E', 'I', 'O', 'U', 'Y'];
const CONSONNES = [
  'B',
  'C',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'M',
  'N',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'V',
  'W',
  'X',
  'Z',
];
let nombreDeVoyelles = 0;
let nombreDeConsonnes = 0;

form.onsubmit = function (event) {
  event.preventDefault();
  const saisie = input.value.toUpperCase();

  for (let caractere of saisie) {
    if (VOYELLES.includes(caractere)) {
      nombreDeVoyelles = nombreDeVoyelles + 1;
    }
    if (CONSONNES.includes(caractere)) {
      nombreDeConsonnes = nombreDeConsonnes + 1;
    }
  }

  paragraph.textContent =
    'Nombre de consonnes = ' +
    nombreDeConsonnes +
    ' <> ' +
    'Nombre de voyelles = ' +
    nombreDeVoyelles;
};

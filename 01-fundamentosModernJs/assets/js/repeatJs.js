const text = 'Helo ';

console.log(text.repeat(2));

const SPACES = 12;

const names = ['anbreaker', 'jeje', 'Magalí'];

const phones = ['123.123.123','123.123.123','123.123.123'];

for(i in names){
  let dif = SPACES - names[i].length;
  console.log(names[i] + " ".repeat(dif) + " | " + phones[i]);
}
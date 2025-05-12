import readlineSync from 'readline-sync';

export function ask(question) {
  return readlineSync.question(question);
}

export function capitalizeWords(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
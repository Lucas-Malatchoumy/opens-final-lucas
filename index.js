function compterMots(str) {
  return str.split(' ').filter(Boolean).length;
}

function inverserChaine(str) {
  return str.split('').reverse().join('');
}

function camelCase(str) {
  return str.split(' ').map((word, index) => {
      return index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

module.exports = { compterMots, inverserChaine, camelCase };

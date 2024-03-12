//  Puis ajouter un script (dans un autre fichier) permettant de trouver le mot le plus long d'une phrase.

function findString(array) {
  let longestString = "";

  array.forEach(function (string) {
    if (string.length > longestString.length) {
      longestString = string;
    }
  });

  return longestString;
}

let string = findString([
  "afsjk",
  "akhfjsdl",
  "ldjh",
  "c'est la plus longue phrase",
  "hkjfsdllfjhsnv",
]);

console.log(string);

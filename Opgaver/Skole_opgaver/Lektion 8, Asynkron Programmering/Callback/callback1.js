function langvarig(nr, callback) {
  let type = Math.trunc(Math.random() * 3);
  if (type === 0) throw new Error(`${nr} Slet ikke OK!`);
  setTimeout(afslut, 500);
  function afslut() {
  if (type === 1) callback(false, `${nr} OK!`);
  else if (type === 2) callback(`${nr} Ikke OK!`);
  }
  }


function langvarig(nr, callback) {...}
try {
langvarig(1, slut);
console.log('Efter kald af langvarig()');
}
catch (e) {
console.log('Exception: ' + e);
}
function slut(fejl, resultat) {
if (fejl)
console.log('Fejl: ' + fejl);
else
console.log('Resultat: ' + resultat);
}
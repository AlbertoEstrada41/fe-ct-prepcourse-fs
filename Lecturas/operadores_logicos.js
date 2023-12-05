//AND
function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false);
};
mayorYMenorYPar(7);
mayorYMenorYPar(8); 
console.log('------------------------------------------------------')
// OR
function operadorOr(str) {
   if (str === 'Henry' || str.length < 2) console.log(true);
   else console.log(false);
}
operadorOr('Henry');
operadorOr('Javascript');
operadorOr('H');
console.log('-------------------------------------------------------')
// NOT
function negacion(permiso) {
   if (!permiso) console.log('Tiene permiso');
}
negacion(false);
// negacion(true);

console.log('-------------------------------------------------------')

//VERACIDAD
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(-1))
console.log(Boolean(true))
console.log(Boolean(false))
console.log(Boolean('string'))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean([0]))

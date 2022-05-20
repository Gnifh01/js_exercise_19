const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;
person2.firstName = "Simon"

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);


/* RISPOSTA */
// Non venendo creata una copia dell'oggetto person1, person2 possiede tutte le proprietà di person1 inclusi i cambiamenti per assegnazione quando questi avvengono, infatti abbaimo modificatO il valore della chiave "fristname" in person2 e la modifica è avvenuta anche in person1, sottolineando il fatto che non è stato creato e copiato un nuovo oggetto
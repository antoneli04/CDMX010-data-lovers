import {filterResults, filterSpecies, filterGender, filterStatus, filterType, orderCardsAZ, orderCardsZA } from '../src/data.js';
const characters = [
{
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
},
{
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
},
{
  "id": 3,
  "name": "Summer Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
},
{
  "id": 4,
  "name": "Beth Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
},
{
  "id": 5,
  "name": "Jerry Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
}
]

const charactersOrder = [
  {
    "id": 4,
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
  },
  {
    "id": 5,
    "name": "Jerry Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
  },
  {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
  },
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
  },
  {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
  }  
  ]

// Testeamos que todas son funciones
describe('All are functions', () => {
  it('filterResults is a function', () => {
    expect(typeof filterResults).toBe('function');
  });
  it('filterSpecies is a function', () => {
    expect(typeof filterSpecies).toBe('function');
  });
  it('filterGender is a function', () => {
    expect(typeof filterGender).toBe('function');
  });
  it('filterStatus is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });
  it('filterType, is a function', () => {
    expect(typeof filterType).toBe('function');
  });
  it('orderCardsAZ, is a function', () => {
    expect(typeof orderCardsAZ).toBe('function');
  });
  it('orderCardsZA, is a function', () => {
    expect(typeof orderCardsZA).toBe('function');
  });
});
// Testeamos los filtros
describe('It should filter all the data', () => {
it('it should retun the specie selected for example "human"', () => {
  const filterCharacters = filterSpecies(characters, 'Human')
  filterCharacters.forEach((character) => {
    expect(character.species).toBe('Human');
  })
});

it('it should retun the status selected for example "Alive"', () => {
  const filterCharacters = filterStatus(characters, 'Alive')
  filterCharacters.forEach((character) => {
    expect(character.status).toBe('Alive');
  })
});

it('it should retun the type selected for example ""', () => {
  const filterCharacters0 = filterType(characters, '')
  filterCharacters0.forEach((character) => {
    expect(character.type).toBe('');
  })
});
});

describe('Function sort', () => {
  it('Order A-Z', () => {
   expect(orderCardsAZ(characters)).toStrictEqual(charactersOrder);
  });

  describe('Function sort', () => {
    it('Order A-Z', () => {
     expect(orderCardsAZ(characters)).toStrictEqual(charactersOrder);
    });
//Incierto




// function suma(a,b){
//   return a + b;
// }
// function resta(a,b){
//   return a - b;
// }
// describe('funciones de suma y resta', () => {
//   test('suma de 20 y 30', () => {
//     expect(suma(20,30)).toBe(50);
//   });
//   test('resta de 20 y 10', () => {
//     expect(resta(20,10)).toBe(10);
//   });
// });

// import { example, anotherExample } from '../src/data.js';


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

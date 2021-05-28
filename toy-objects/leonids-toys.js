const toys = [
    {
        id: 1,
        name: "Hot Wheels",
        inventory: 14,
        isCheap: true,
        countryOfOrigin: "China",
        price: 5
    },    
    {
        id: 2,
        name: "Legos",
        inventory: 7,
        isCheap: false,
        countryOfOrigin: "Usa",
        price: 10
    },
    {
        id: 3,
        name: "Frisbee",
        inventory: 21,
        isCheap: true,
        countryOfOrigin: "India",
        price: 15
    }
];


// console.log(toys);

// displaying name property of all toys

// for (const toy of toys) { 
//     console.log(toy.name)
// };

// Doing new toy exercise with the push method

const boomerang = {
    id: 4,
    name: "Boomerang",
    inventory: 21,
    isCheap: false,
    countryOfOrigin: "Australia",
    price: 20
};

const hockeySack = {
    id: 5,
    name: "Hockey-Sack",
    inventory: 50,
    isCheap: true,
    countryOfOrigin: "Philippines",
    price: 25
};

toys.push(boomerang);
toys.push(hockeySack);

// for (const toy of toys) { 
//     console.log(toy.name)
// };


// Iterate Leonid's Toy Catalog

// for (const toy of toys) {
//     console.log(`The ${toy.name} was made in ${toy.countryOfOrigin} and we have ${toy.inventory} in our inventory. Someone asked if it is cheap, the answer is ... ${toy.isCheap}.`)
// };



// Practice Leonids Prices
// for (const toy of toys) {
//     toy.price += toy.price * 0.5
//     console.log(`The ${toy.name} now costs ${toy.price} dollars!`)
// };

// Finding an Item in an array with if inside of for loop exercise

// const toyToFind = 3


// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//         toy.price = toy.price += 0.5
//         console.log(`The ${toy.name} was made in ${toy.countryOfOrigin} and we have ${toy.inventory} in our inventory. Someone asked if it is cheap, the answer is ... ${toy.isCheap}.`)
//     };
// };



// Practice: Adding Toys with Functions exercise


const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
    toyObject.id = idForNewToy
    toys.push(toyObject)
};


const nerfGun = {
    name: "Nerf Gun",
    inventory: 26,
    isCheap: true,
    countryOfOrigin: "Spain",
    price: 7
};


addToyToInventory(nerfGun);

for (const toy of toys) {
    console.log(`The ${toy.name} was made in ${toy.countryOfOrigin} and we have ${toy.inventory} in our inventory. Someone asked if it is cheap, the answer is ... ${toy.isCheap}.`)
};

console.log(toys);
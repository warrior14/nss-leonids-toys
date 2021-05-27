const toys = [
    {
        id: 1,
        name: "Hot Wheels",
        inventory: 14,
        isCheap: true,
        countryOfOrigin: "China"
    },    
    {
        id: 2,
        name: "Legos",
        inventory: 7,
        isCheap: false,
        countryOfOrigin: "Usa"
    },
    {
        id: 3,
        name: "Frisbee",
        inventory: 21,
        isCheap: true,
        countryOfOrigin: "India"
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
    countryOfOrigin: "Australia"
};

const hockeySack = {
    id: 5,
    name: "Hockey-Sack",
    inventory: 50,
    isCheap: true,
    countryOfOrigin: "Philippines"
};

toys.push(boomerang);
toys.push(hockeySack);

for (const toy of toys) { 
    console.log(toy.name)
};

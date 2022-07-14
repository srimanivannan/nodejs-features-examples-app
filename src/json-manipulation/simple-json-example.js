function canDrink(person) {
    if (person?.name == null) return console.error("Not a person")
    if (person.age < 18) {
        console.log("Not allowed");
    }
    if (person.age >= 18 && person.age < 21) {
        console.log("Allowed in us with condition");
    }

    // Both the push are same. one with key double quotes and another is not.
    // However, you can't surround the whole object with quotes because that will be considered as object
    person.address.push({"street":"100 bergen","apt_or_suite":100,"city":"royal oak","type":"office"})
    person.address.push({street:"100 bergen",apt_or_suite:100,city:"royal oak",type:"office"})

    console.log("String format print: %s", JSON.stringify(person, null, 2)) // string print
    console.log("Object format print: %o", person) // object print
}

/*
    Note: The below json object has key-value pair structure.
    key doesn't have with double-quotes. if you do JSON.stringify(p, null, 2) then key will have with double-quotes
    you can also surround the key with double-quotes then if you do JSON.stringify(p, null, 2) then key will still have with double-quotes
    meaning, no difference
 */
const p = {
    name: 'mani',
    age: 56,
    email: 'test@testmail.com',
    phones: [12345, 8586586, 23949549],
    address: [
        {
            street: '123345 chase',
            apt_or_suite: 12,
            city: 'new york',
            type: 'home'
        },
        {
            street: '56765 chase',
            apt_or_suite: 100,
            city: 'new york',
            type: 'office'
        }]
}

canDrink(p)
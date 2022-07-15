let user = {
    "userType": 'socialmedia',
    "users": [
        {
            "id": 1,
            "first_name": "selva",
            "last_name": "kumar",
            "email": "sev@gmail.com"
        },
        {
            "id": 2,
            "first_name": "Ben",
            "last_name": "Caprio",
            "email": "test@gmail.com"
        }
    ]
}

function method1_Object_entries(user) {
    console.log("=======method1 Object.entries type 1 =======")
    for (let [key, value] of Object.entries(user)) {
        console.log("jsonKey=%o  jsonValue=%o", key, value);
    }
    console.log("=======method1 Object.entries type 2 =======")
    Object.entries(user).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        console.log("jsonKey=%o  jsonValue=%o", key, value);
    });
    console.log("=======method1 Object.entries type 3 =======")
    Object.entries(user).map(entry => {
        let key = entry[0];
        let value = entry[1];
        console.log(key, value);
    });
}

function method2_Object_keys(user) {
    console.log("=======method2 Object.keys type 1 =======")
    Object.keys(user).forEach(key => {
        let value = user[key];
        console.log(key, value);
    });
}

function method3_Object_values(user) {
    console.log("=======method3 Object.values type 1 =======")
    Object.values(user).forEach(value => {
        console.log(value);
    });
}

function method4_for_in(user) {
    console.log("=======method4 for in type 1 =======")
    for (let key in user) {
        let value = user[key];
        console.log(key, value);
    }
}

function method5_hasOwnProperty_check(user) {
    console.log("=======method5_hasOwnProperty_check =======")
    for (let key in user) {
        let value = user[key];
        if (user.hasOwnProperty(key)) {
            console.log(`Property ${key} is NOT from prototype chain`);
        } else {
            console.log(`Property ${key} is from prototype chain`);
        }
    }
}

//method1_Object_entries(user);
//method2_Object_keys(user);
//method3_Object_values(user);
//method4_for_in(user);
method5_hasOwnProperty_check(user);
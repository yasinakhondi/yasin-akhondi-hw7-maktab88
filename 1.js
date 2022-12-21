

let userData = []

personData.forEach(function (item) {
    userData.push(Object.assign
        ({}, item, ...additionalPersonData.filter(function (input) {
            return item.uid === input.uid

        })))
})

// console.log(userData);


// ////////////read//////



function read(input) {
    return input
}
// console.log(userData);









// /////////creat///////




let newobject = {
    uid: 7, firstName: "yasin", lastName: "akhondi",
    position: 'student', city: "tehran"
}


function creat(input, list) {

    for (const item of list) {
        if (input.uid === item.uid) {
            return "!!!!!!!!pleas enter new uid"
        }
    }
    for (const item of list) {
        if (item.uid !== input.uid) {
            return userData.push(input), 'goooood'
        }
    }
    return input
}
// console.log(creat(newobject, userData));









// ///////////update//////////



function update(inputObject) {
    let result = userData.find(function (item) {
        return item.uid === inputObject.uid
    })
    if (!result) {
        throw new Error("eroor!!!!!")
    }
    for (const item in inputObject) {
        result[item] = inputObject[item]
    }
    console.log("succesfull");
    // console.log(result);
}

update({
    uid: 10, firstName: "yasin", lastName: "akhondi",
    position: 'student', city: "tehran"
});

// console.log(userData);



// ///////////////////remove//////////

function remove(input) {
    userData.forEach(function (item, index) {
        if (item.uid === input) {
            userData.splice(index, 1),
                console.log("removed")
        }
    })
    return userData
}
// console.log(remove());


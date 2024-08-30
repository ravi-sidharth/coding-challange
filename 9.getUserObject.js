function getUserObject(firstName, lastName, age) {
    const user = {
        age,
        name:`${firstName} ${lastName}`,
    };
    return user;
}

console.log(getUserObject("Ravi","Kumar",23));



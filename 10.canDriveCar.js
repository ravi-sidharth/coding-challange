function canDriveCar(user, car) {
    let name = user.name;
    let age = user.age;

    let engineSize = car.engineSize;
    let carName = car.name;

    if ((age >=18) || (engineSize<1000)) {
        return true
    }
    else {
        return false
    }
}

const user = {"name":"Jon Doe","age":21}
const car = {"engineSize":1200,"name":"Mazda 3"}

console.log(canDriveCar(user,car))
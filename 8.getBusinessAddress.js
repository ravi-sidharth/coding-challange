function getBusinessAddress(business) {
    const address = business.address;
    const name = business.name;

    const number = address.number
    const street = address.street
    const zipCode = address.zipCode
    
    return (`${street}, number ${number} ${zipCode}`)


}
const business = {"address":{"number":3,"zipCode":123500,"street":"Avenuepark"},"name":"100 Functions ltd."}

console.log(getBusinessAddress(business))

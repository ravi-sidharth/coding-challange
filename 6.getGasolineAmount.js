function getGasolineAmount(distance, consumptionPer100Km) {
    return (2*distance)/(100/consumptionPer100Km)
}

console.log(getGasolineAmount(128,6.4))

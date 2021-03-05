function randomDestination(){
    const destination=["italy", "japan", "spain"];
    const randomDestination= Math.floor(Math.random()*(3));
    return destination[randomDestination];
}
console.log(randomDestination());









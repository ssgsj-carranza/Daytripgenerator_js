function randomDestination(){
    const destination=["italy", "japan", "spain"];
    const randomDestination= Math.floor(Math.random()*(3));
    return destination[randomDestination];
}
console.log(randomDestination());



function randomRestaurant(){
    const restaurant=["mcdonalds", "tacobell", "burgerking"];
    const randomRestaurant= Math.floor(Math.random()*(3));
    return restaurant[randomRestaurant];
}
console.log(randomRestaurant());



function randomTransport(){
    const transport=["bike", "car", "piggyback"];
    const randomTransport= Math.floor(Math.random()*(3));
    return transport[randomTransport];
}
console.log(randomTransport());



function randomEntertainment(){
    const entertainment=["musical","movies","yugioh cards"];
    const randomEntertainment= Math.floor(Math.random()*(3));
    return entertainment[randomEntertainment];
}
console.log(randomEntertainment());





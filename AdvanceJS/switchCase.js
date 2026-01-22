

function selectItem(item){
    let price = 0

    switch(item){
        case 'coffee':
            price = 2
            break
        case 'sadwiches':
            price = 5
            break
        case 'salad':
            price = 4
            break
        case 'lemon cake':
            price = 3
            break   
        default :
            return `Sorry we don't sell ${item}`     
    }

    return `You selected ${item} . That will be $ ${price}.`
}

console.log(selectItem('salad'))
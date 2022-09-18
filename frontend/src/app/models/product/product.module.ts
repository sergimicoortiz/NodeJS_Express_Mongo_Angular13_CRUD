export interface Product {
    _id: String
    name: String
    price: Number
    description: String
    owner: String
    category: String
    picture: String[]
    //__v?: Number
}

//Si el servidor envia informacion que no consta en la interface esta no se añadira al objecto, en este caso al no delcarar __v no podemos acceder a el desde el cliente.
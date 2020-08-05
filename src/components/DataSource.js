import axios from 'axios'

const SHOPPING_CART_PORTAL = 'http://localhost:8080'
class DataSource{

    retreiveAllProducts(){
        return axios.get(`${SHOPPING_CART_PORTAL}/products`)
    }

    updateQuantity(productId, quantity){
        return axios.put(`${SHOPPING_CART_PORTAL}/updateQuantity${productId}/${quantity}`)
    }

    addToCart(orderedProduct){
        return axios.post(`${SHOPPING_CART_PORTAL}/addItems`, orderedProduct)
}

}export default new DataSource()
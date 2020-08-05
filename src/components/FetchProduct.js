import React, { Component } from "react";
import DataSource from "../../components/DataSource";
import productReducer from "../../store/reducers/productReducer";


class populateProduct extends Component {
  constructor(props){
    super(props)
    this.state={
        products:[]
    }
    this.refreshProducts = this.refreshProducts.bind(this)
}
componentDidMount=()=>{
    this.refreshProducts();
}

refreshProducts=()=>{
    DataSource.retreiveAllProducts()
    .then(
        Response=>{
            console.log(Response);
           this.setState({products:Response.data})
        }
    )
}
render(){
    <productReducer products={this.state.products} />
}
}export default populateProduct
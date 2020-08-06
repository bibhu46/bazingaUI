1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
 
class Navbar extends Component {
 
    render() {
 
        this.props.cartUpdated();
 
        let total = 0;
 
        this.props.cart.map(item => total += item.product.price * item.quantity);
 
        return (
 
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">Shopping cart</NavLink>
                    </div>
 
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/my-cart">
                                {
                                    this.props.cart.length > 0 ? (
                                        <span className="label label-info">{ this.props.cart.length } items: (${total.toFixed(2)})</span>
                                    ) : null
                                }
                                <i className="glyphicon glyphicon-shopping-cart"></i> My Cart</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
 
const mapStateToProps = (state) => {
 
    return {
        cart: state.cart.cart,
        cartUpdated: () => { return true }
    }
};
 
export default connect(mapStateToProps)(Navbar);
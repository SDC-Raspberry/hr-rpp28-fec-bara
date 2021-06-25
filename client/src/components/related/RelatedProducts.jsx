import React from 'react';
import $ from 'jquery';
import _ from 'underscore';
import ProductCard from './ProductCard.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      firstCard: 0
    };
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.getRelatedProducts(props.currentProductId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentProductId !== this.props.currentProductId && JSON.stringify(prevState.products) === JSON.stringify(this.state.products)) {
      this.getRelatedProducts(this.props.currentProductId);
    }
  }

  getRelatedProducts(id) {
    $.get('/related', {'id': id }, (products) => {
      this.setState({ products, firstCard: 0 });
    });
  }

  // Click handlers for carousel buttons
  rightArrowClick() {
    if (this.state.firstCard < this.state.products.length - 3) {
      this.setState((state) => (
        { firstCard: state.firstCard + 1 }
      ));
    }
  }

  leftArrowClick() {
    if (this.state.firstCard > 0) {
      this.setState((state) => (
        { firstCard: state.firstCard - 1 }
      ));
    }
  }

  render() {
    return (
      <div >
        <h4>Related Products</h4>
        <div className = "carousel">
          {this.state.firstCard > 0 ? <button type="button" onClick={this.leftArrowClick.bind(this)} style={{backgroundColor: 'white', border: 'none'}}> Left </button> : ''}
          {this.state.products.slice(this.state.firstCard, this.state.firstCard + 3).map((product, i) => {
            return <ProductCard key={i} product={product} list={'related'} changeCurrentProduct={this.props.changeCurrentProduct} currentProductInfo={this.props.currentProductInfo || {id: null}} />;
          })}
          {this.state.firstCard < this.state.products.length - 3 ? <button type="button" onClick={this.rightArrowClick.bind(this)} style={{backgroundColor: 'white', border: 'none'}}> Right </button> : ''}
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
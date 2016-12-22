import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Cell from './cell';

// function tick() {
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 1000);


ReactDOM.render(
  <Dates />
  <Cell />,
  document.getElementById('root')
);

// class ProductCategoryRow extends React.Component {
//   render() {
//     return <tr><th colSpan="2">{this.props.category}</th></tr>;
//   }
// }
//
// class ProductRow extends React.Component {
//   render() {
//     var name = this.props.product.stocked ?
//       this.props.product.name :
//       <span style={{color: 'red'}}>
//         {this.props.product.name}
//       </span>;
//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{this.props.product.price}</td>
//       </tr>
//     );
//   }
// }
//
// class ProductTable extends React.Component {
//   render() {
//     var rows = [];
//     var lastCategory = null;
//     this.props.products.forEach(function(product) {
//       if (product.category !== lastCategory) {
//         rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
//       }
//       rows.push(<ProductRow product={product} key={product.name} />);
//       lastCategory = product.category;
//     });
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }
//
// class FilterableProductTable extends React.Component {
//   render() {
//     return (
//       <div>
//         <ProductTable products={this.props.products} />
//       </div>
//     );
//   }
// }
//
//
// var PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];
//
// ReactDOM.render(
//   <FilterableProductTable products={PRODUCTS} />,
//   document.getElementById('root')
// );

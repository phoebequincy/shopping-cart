import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      /*...*/
    }
  }
  render() {
    return <div>{this.props.children}</div>
  }
}
const CartHeader = () => {}
const CartFooter = () => {}
const CartItems = () => {}
const App = () => (
  <Parent>
    <Children1 />
    <Children2 />
  </Parent>
)

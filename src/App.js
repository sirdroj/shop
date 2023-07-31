import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import { PRODUCTS } from "./products";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
function App() {
  const [cart, setcart] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  });
  function checkout(){
    setcart({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
    })
  }
  function add(id) {
    let x={ ...cart};
    x[id]+=1
    setcart(x)
  }
  function remove(id) {
    if (cart[id] > 0) {
      let x={ ...cart};
    x[id]-=1
    setcart(x)
    }
  }
  function total() {
    var s = 0;
    PRODUCTS.map((product) => {
      s += product.price * cart[product.id];
    });
    console.log("total",s)
    return s;
  }
const [login,setlogin]=useState(false)
const [username,setusername]=useState("")
  const[pg,setpg]=useState(1)
  function MyComponent(option){
    let componentToRender;
    // console.log(option)
    switch (option) {
      case 1:
        componentToRender = <Home add={add} remove={remove} cart={cart}/>
        break;
      case 2:
        componentToRender = <Cart add={add} remove={remove} cart={cart} total={total} checkout={checkout}/>
        break;
    }
    return(componentToRender)
  }
  const myc=<div className="App flex">

  <Navbar setpg={setpg} username={username}/>
  {MyComponent(pg)}
</div>
  return (

    <div className="App flex">

      {(() => {
        if (login) {
          return myc;
        } else {
          return <Login setlogin={setlogin} username={username} setusername={setusername}/>;
        }
      })()}
    </div>
    
  );
}
export default App;

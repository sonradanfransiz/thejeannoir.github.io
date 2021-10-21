
import {useState} from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()
  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

   // function handleMainMenu(){
   //     history.push("/");
   // }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" name="Anasayfa" />
          <Menu.Item as={Link} to="/messages" name="Mesajlar" />
          <Menu.Item as={Link} to="/product/add" name='Item Ekle'/>

          <Menu.Menu position="right">
            {cartItems.length>0&&<CartSummary/>}
            {isAuthenticated?<SignedIn signOut={handleSignOut}/>
            :<SignedOut signIn={handleSignIn}/>}  
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

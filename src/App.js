import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Advices from "./components/Advices";
import Promo from "./components/Promotions";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div>
            <Header />
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/advices" component={Advices}></Route>
            <Route path="/promo" component={Promo}></Route>
            <Route path="/contacts" component={Contacts}></Route>
            <Route path="/" exact component={Main}></Route>
          </div>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

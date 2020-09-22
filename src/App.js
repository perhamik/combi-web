import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NaviBar from './Components/Navibar';
import { Container } from 'react-bootstrap';
import FooterComp from './Components/FooterComp';

import {
    BrowserRouter as Router,
    Switch,
    Route    
} from 'react-router-dom';

import {Home} from './Home';
import {Catalogue} from './Catalogue';
import {About} from './About';
import {Buy} from './Buy';

let themeState;
class Toggle extends React.Component {
     
    constructor(props) {
        super(props);
        themeState = window.localStorage.getItem('themeState');    
        this.state = {isToggleOn: themeState};
        this.handleClick = this.handleClick.bind(this);             
    }
    handleClick(){
        themeState = this.state.isToggleOn;
        this.setState(state => ({            
            isToggleOn: !state.isToggleOn
        }));
        themeState = this.state.isToggleOn;
        window.localStorage.setItem('themeState', themeState);  
    }    
    render() {
        return (           
          <div className="toggle-container"><p>Dark Mode</p><div className="toggle-section"><div className="toggle-btn" onClick={this.handleClick}>
            <input id="checkMode" type="checkbox" checked={!themeState} /><span></span>
          </div></div></div>
        );
      }
  }

export default function App() {    
    return (    
        <>                
            <div className="container-main">
                <Router>                    
                    <Toggle></Toggle>
                    <NaviBar></NaviBar>
                    <Container>
                        <Switch>
                            <div className="d-flex h-100 container-fh">
                                <Route exact path="/" component={Home}></Route>
                                <Route exact path="/catalogue" component={Catalogue}></Route>
                                <Route exact path="/about" component={About}></Route>
                                <Route exact path="/buy" component={Buy}></Route>
                            </div>
                        </Switch>
                    </Container>       
                    <FooterComp></FooterComp>
                </Router>           
            </div>
        </>       
    );
}

import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CurrencyRateMain from './CurrencyRateMain';
import CurrencyRateTrans from './CurrencyRateTrans';
import LogoComponent from './LogoComponent';
function App(){
  
    return(
    
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path='/currencyratetrans' component={CurrencyRateTrans} />
          <Route path='/LogoComponent' component={LogoComponent}/>
          <Route path='/' component={CurrencyRateMain} />
        </Switch>
        </BrowserRouter>
        </div>
    )
  
}

export default App;


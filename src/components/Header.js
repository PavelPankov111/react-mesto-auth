import React from 'react';
import headerLogo from '../images/vector.svg'
import { Route, Switch } from 'react-router-dom'

function Header() {
    return    <Switch>    
        <Route path="/mesto-react/404" exact/>    
        <Route path="*" exact>    
        <header className="header">
            <img className="header__logo" alt="Место Россия" src={headerLogo} />
            <p className="header__button" >Регистрация</p>
        </header>
        </Route>    
    </Switch>
}

export default Header;
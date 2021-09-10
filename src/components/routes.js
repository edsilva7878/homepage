import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from './home/index'
import Skills from './skills/index'
import Contacts from './contacts/index'
import Partners from './partners/index'
import Homet from './homet/index'
import Skillst from './skillst/index'
import Contactst from './contactst/index'
import Partnerst from './partnerst/index'




export default function Routes(){
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { Skills }  path="/skills" exact />
            <Route component = { Contacts }  path="/contacts" exact />
            <Route component = { Partners }  path="/partners" exact />
            <Route component = { Homet }  path="/homet" exact />
            <Route component = { Skillst }  path="/skillst" exact />
            <Route component = { Contactst }  path="/contactst" exact />
            <Route component = { Partnerst }  path="/partnerst" exact />



        </BrowserRouter>
    )
}
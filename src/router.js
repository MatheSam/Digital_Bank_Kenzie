import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom'
import TelaInicial from "./components/inicialScreen";
import MainScreen from "./components/mainScreen";

function Rotas() {
  return (
    <Switch>
      <Route exact path="/">
        <TelaInicial />
      </Route>

      <Route exact path="/main">
        <MainScreen />
      </Route>
    </Switch>
  )
}

export default Rotas
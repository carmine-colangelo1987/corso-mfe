import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {StylesProvider, createGenerateClassName} from "@material-ui/core/styles";

import Landing from './components/Landing'
import Pricing from './components/Pricing'

/**
 * Questa funzione genera un prefisso diverso alle classi custom generate tramite la libreria "createStyle"
 *
 * In produzione le classi CSS avranno un prefisso diverso da quello di default.
 * Questo serve a prevenire l'ereditarietà del CSS tra i vari microfrontend (nulla va dato per scontato)
 */
const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
})

export default () => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
};
;
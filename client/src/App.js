import React from 'react';
import GlobalStyles from './GlobalStyles';
import AppMain from './Components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div id="App">
            <GlobalStyles />
            <AppMain />
        </div>
    );
};

export default App;

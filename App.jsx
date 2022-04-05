import React, {memo} from 'react';
import "./index.css";
import MainPage from './pages/index';

const App = memo(() => {
    return(
        <div className='weather-default'>
            <MainPage />
            <footer> by Juyi </footer>
        </div>
    )
})

export default App;
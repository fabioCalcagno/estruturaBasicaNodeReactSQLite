import React from 'react';

import Buttons from '../../components/buttons';
import './styles.css';


function Landing(){

    return (
        <header className="teste">
            
            <div className="teste1"> <Buttons label="teste"  linkTo="/"/> </div>
            <div className="teste1"> <Buttons label="teste1" linkTo="/"/> </div>
            <div className="teste1"> <Buttons label="teste2" linkTo="/"/> </div>
            <div className="teste1"> <Buttons label="teste3" linkTo="/"/> </div>
         
        </header>
    );
}
export default Landing;


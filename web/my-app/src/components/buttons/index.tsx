import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

interface buttonProps{
    label: string;
    linkTo: string;
    width:string;
    height:string;
}



//function animateButton(eventCurrentTarget){
   // let element =window.getComputedStyle(eventCurrentTarget)
   // let width =element.getPropertyValue('width')
    //let height = element.getPropertyValue('height')}



const Buttons : React.FC<buttonProps> = (props:buttonProps) =>{

    const [tester, setTester] = useState('');

    function teste(){
        api.get('/teste').then(response=>{
            setTester(response.data)
        })
 }



        return (
           
                <Link to={props.linkTo} onClick={teste} >
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <rect  ></rect>
                        <path d="M 20,70 L 80,70" />

                    </svg>
                    <span>{tester ? tester : props.label }</span> 
                   
               </Link>
            
        );
}

export default Buttons;
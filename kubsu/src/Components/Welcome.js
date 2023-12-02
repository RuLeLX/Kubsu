import React from 'react';
import '../style/LogoKubsu.css'
import { ReactComponent as LogoKubsu } from '../image/Logosvg.svg';

export default function Welcome() {

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setVisible(!visible)
    //     }, 4000)
    // }, [])
    
    return <LogoKubsu className='LogoKubsu'/>
        
    
}

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ReactComponent as LogoKubsu } from '../image/Logosvg.svg';

export default function Welcome() {

    const [visible, setVisible] = useState(true);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setVisible(!visible)
    //     }, 4000)
    // }, [])
    
    return <>
        <LogoKubsu />
    </>
}

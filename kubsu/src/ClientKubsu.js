import React from 'react';
import { useEffect } from 'react';
import Welcome from './Components/Welcome'
import './style/Welc.css'

//Output Kubsu logo, but after 2 sec see UserForm
export default function ClientKubsu() {



    return <> 
        <div  className="Welc">
            <Welcome/>
        </div>
    </>
}
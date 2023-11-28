import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Welcome from './Components/Welcome'
import './style/Welcome.css'

//Output Kubsu logo, but after 2 sec see UserForm
export default function ClientKubsu() {


    return <> 
        <div  className="Welcome">
            <Welcome/>
        </div>
    </>
}
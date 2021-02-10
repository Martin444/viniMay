
import React, { useEffect } from 'react'
import { isAndroid,isIOS,osName } from 'react-device-detect';

import Box from '../Components/box'


const Redirect = () =>{

    const ios = "https://apps.apple.com/ar/app/vinimay/id1506565366";
    const Android = "https://play.google.com/store/apps/details?id=com.vinimay.app";
    useEffect(() => {
        if(isAndroid){
            redirect = `Sistema ${osName} - ruta STORE: ${Android}!`;
            window.location="instagram://user?username=lucasfradusco"
            setTimeout(() => {
                window.location=Android
            }, 2500);
        }else if(isIOS){
            window.location="instagram://user?username=lucasfradusco"
            redirect = `Sistema: ${osName} - ruta STORE: ${ios}!`;
        }else{
            redirect = "browser no soportado";
        }
    },)
    
    let redirect;

    

    return (
        <div className='pageContacto'>
            <Box/>
            {redirect}       
        </div>
    );
}


export default Redirect;
import React from 'react'

import Link from '@material-ui/core/Link'
function LogoComponent(props){
    return( <Link to="https://www.crosspayment.com/home"> 
    <img src="./images/logcrosspay.png" Link="https://www.crosspayment.com/home" width={600} style={{msAlignSelf:'center'}}/>
    </Link>)
}

export default LogoComponent;
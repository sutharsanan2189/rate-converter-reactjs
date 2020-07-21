import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import image from "./images/logo.png"
import LogoComponent from "./LogoComponent"
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor: "#C0C0C0",
    },
    image: {
      backgroundImage: `${image}`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: "#C0C0C0",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width:'200px'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#C0C0C0",
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
   
  }));
    const fontStyle={
      fontStyle:'italic',
      padding:10,
      textDecorationLine:'underline'
    }
    const paper = {
      display: 'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundColor:"#C0C0C0"
    }
    
export default function CurrencyRateTrans(props){
    const {fromCountry,toCountry,fromCcy, toCcy, fromAmount, toAmount} = props.location.state
    const classes = useStyles();
    return(        
      
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} component={LogoComponent}/>
      
      <Grid item xs={12} sm={8} md={5}  elevation={6} style={paper} square>
        <Typography>&nbsp;</Typography>
    &nbsp; <Button type="submit" variant="contained" color="primary"><Link style={{textDecoration:'none',color:'white'}} to='CurrencyRateMain'>Home</Link></Button>
    <Typography>&nbsp;</Typography>
        <div style={paper}>
          <table>
            <tr><td><Typography component="h1" variant="h5" style={fontStyle}>From Country</Typography></td>
            <td><Typography component="h1" variant="h5" style={fontStyle}>{fromCountry}</Typography></td></tr>
            <tr><td><Typography component="h1" variant="h5" style={fontStyle}>To Country</Typography></td>
            <td><Typography component="h1" variant="h5" style={fontStyle}>{toCountry}</Typography></td></tr>
            <tr><td><Typography component="h1" variant="h5" style={fontStyle}>From Currency </Typography></td>
            <td><Typography component="h1" variant="h5" style={fontStyle}>{fromCcy}</Typography></td></tr>
            <tr><td><Typography component="h1" variant="h5" style={fontStyle}>To Currency</Typography></td>
            <td><Typography component="h1" variant="h5" style={fontStyle}>{toCcy}</Typography></td></tr>
            <tr><td><Typography component="h1" variant="h5" style={fontStyle}>From Amount</Typography></td>
            <td><Typography component="h1" variant="h5" style={fontStyle}>{fromAmount}</Typography></td></tr>
            <tr><td><Typography component="h1" variant="h5" style={fontStyle}>To Amount</Typography></td>
            <td><Typography component="h1" variant="h5" style={fontStyle}>{toAmount}</Typography></td></tr>
          </table>
        </div>
      </Grid>
    </Grid>
    )
}
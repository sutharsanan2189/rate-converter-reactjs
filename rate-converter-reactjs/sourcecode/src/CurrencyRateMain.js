import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import image from "./images/logo.png"
import LogoComponent from "./LogoComponent"
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor: "#C0C0C0",//#b7b9b8
    },formControl:{
      margin: theme.spacing(1),
      minWidth:120,
    },selectEmty:{
      marginTop: theme.spacing(1),
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
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#C0C0C0",
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const textStyle = {
    width:'230px'
  }
  const labelDD ={
    color:'Black'
  }
    const paper = {
      display: 'flex',
      flexDirection:'column',
      alignItems:'center'
    }

function CurrencyRateMain(props){
    const classes = useStyles();
    return(
        <form onSubmit={props.handleSubmit}>

      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} component={LogoComponent} />
      <Grid item xs={12} sm={8} md={5}  elevation={6} square>
        <div style={paper}>
        <Typography >&nbsp;</Typography>
        <Typography >&nbsp;</Typography>
        <Typography > &nbsp;</Typography>
              
            <FormControl className={classes.formControl} >
                <InputLabel id='select-from-contry' style={labelDD}>&nbsp;From Country</InputLabel>
                <Select labelId='select-from-contry' name="fromCountry" variant = "outlined"
               color="primary" style={textStyle}
                value={props.fromCountry}
                onChange={props.handleChange}>
                <MenuItem value={"India"}>India</MenuItem>
                <MenuItem value={"United Arab Emirates"}>United Arab Emirates</MenuItem>
                <MenuItem value={"Australia"}>Australia</MenuItem>
                <MenuItem value={"South Africa"}>South Africa</MenuItem>
                <MenuItem value={"United State"}>United State</MenuItem>
                <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
                <MenuItem value={"Bahrain"}>Bahrain</MenuItem>
                <MenuItem value={"Canada"}>Canada</MenuItem>
                <MenuItem value={"France"}>France</MenuItem>
                <MenuItem value={"Finland"}>Finland</MenuItem>
                <MenuItem value={"Germany"}>Germany</MenuItem>
                <MenuItem value={"Hong Kong"}>Hong Kong</MenuItem>
                <MenuItem value={"Kuwait"}>Kuwait</MenuItem>
                <MenuItem value={"Malaysia"}>Malaysia</MenuItem>
                <MenuItem value={"Oman"}>Oman</MenuItem>
                </Select>
              </FormControl>
              <Typography >&nbsp;</Typography>
              <FormControl className={classes.formControl}>
                <InputLabel id='select-to-country' style={labelDD}>&nbsp;To Country</InputLabel>
                <Select labelId='select-to-country' style={textStyle} name="toCountry" variant = "outlined" color="primary"
                value={props.toCountry}
                onChange={props.handleChange}>
                <MenuItem value={"India"}>India</MenuItem>
                <MenuItem value={"United Arab Emirates"}>United Arab Emirates</MenuItem>
                <MenuItem value={"Australia"}>Australia</MenuItem>
                <MenuItem value={"South Africa"}>South Africa</MenuItem>
                <MenuItem value={"United State"}>United State</MenuItem>
                <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
                <MenuItem value={"Bahrain"}>Bahrain</MenuItem>
                <MenuItem value={"Canada"}>Canada</MenuItem>
                <MenuItem value={"France"}>France</MenuItem>
                <MenuItem value={"Finland"}>Finland</MenuItem>
                <MenuItem value={"Germany"}>Germany</MenuItem>
                <MenuItem value={"Hong Kong"}>Hong Kong</MenuItem>
                <MenuItem value={"Kuwait"}>Kuwait</MenuItem>
                <MenuItem value={"Malaysia"}>Malaysia</MenuItem>
                <MenuItem value={"Oman"}>Oman</MenuItem>
                </Select>
              </FormControl>
              <Typography >&nbsp;</Typography>
              
              <FormControl className={classes.formControl}>
                <InputLabel id='select-from-currency' style={labelDD}>&nbsp;From Currency</InputLabel>
                <Select labelId='select-from-currency' style={textStyle} name="fromCurrency" variant = "outlined" color="primary"
                value={props.fromCurrency}
                onChange={props.handleChange}>
                <MenuItem value={"INR"}>INR</MenuItem>
                <MenuItem value={"AED"}>AED</MenuItem>
                <MenuItem value={"AUD"}>AUD</MenuItem>
                <MenuItem value={"ZAR"}>ZAR</MenuItem>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"PKR"}>PKR</MenuItem>
                <MenuItem value={"BHR"}>BHR</MenuItem>
                <MenuItem value={"CAD"}>CAD</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"HKR"}>HKR</MenuItem>
                <MenuItem value={"KWD"}>KWD</MenuItem>
                <MenuItem value={"MYR"}>MYR</MenuItem>
                <MenuItem value={"OMR"}>OMR</MenuItem>
                </Select>
              </FormControl>
              <Typography >&nbsp;</Typography>
              <FormControl className={classes.formControl}>
                <InputLabel id='select-to-currency' style={labelDD}>&nbsp;To Currency</InputLabel>
                <Select labelId='select-to-currency' style={textStyle} name="toCurrency" variant = "outlined" color="primary"
                value={props.toCurrency}
                onChange={props.handleChange}>
                <MenuItem value={"INR"}>INR</MenuItem>
                <MenuItem value={"AED"}>AED</MenuItem>
                <MenuItem value={"AUD"}>AUD</MenuItem>
                <MenuItem value={"ZAR"}>ZAR</MenuItem>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"PKR"}>PKR</MenuItem>
                <MenuItem value={"BHR"}>BHR</MenuItem>
                <MenuItem value={"CAD"}>CAD</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"HKR"}>HKR</MenuItem>
                <MenuItem value={"KWD"}>KWD</MenuItem>
                <MenuItem value={"MYR"}>MYR</MenuItem>
                <MenuItem value={"OMR"}>OMR</MenuItem>
                </Select>
              </FormControl>
              
                <TextField type="number" style={textStyle} variant="outlined" value={props.fromAmount} onChange={props.handleChange} 
                margin="normal"  label="From Amount" name="fromAmount" validations={["required"]} required autoFocus autoComplete="fromAmount"/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="submit" variant="contained" color="primary" onClick={props.handleSubmit}>Get Rate</Button>
        </div>
      </Grid>
    </Grid>

        </form>
    )
}

class Customer extends Component
{
    constructor(props) {
        super(props);
        this.state={
            fromCountry:"",
            toCountry:"",
            fromCurrency:"",
            toCurrency:"",
            fromAmount:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = (evt) =>{
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    
    //componentDidMount
    componentDidMount() {
   
    }
    handleSubmit = e => {

      if(this.state.fromCountry ===""){
        alert("Please enter From Country")
        return false
      }
      if(this.state.toCountry ===""){
        alert("Please enter To Country")
        return false
      }
      if(this.state.fromCurrency ===""){
        alert("Please enter From Currency")
        return false
      }
      if(this.state.toCurrency ===""){
        alert("Please enter To Currency")
        return false
      }
      if(this.state.fromAmount ===""){
        alert("Please enter From Amount")
        return false
      }
        axios.post("https://currencyconverterapi-bold-jackal-sy.cfapps.io",{
            fromCurrency:this.state.fromCurrency
            ,toCurrency:this.state.toCurrency
            ,fromAmount:this.fromAmount            
        }).then(function(response){

          this.props.history.push('/currencyratetrans', {fromCcy:response.data.fromCurrency,toCcy:response.data.toCurrency,
            fromAmount:response.data.fromAmount, toAmount:response.data.toAmount})
        })
        
        //For Testing Purpose 
        this.props.history.push('/currencyratetrans', {fromCountry:this.state.fromCountry, toCountry:this.state.toCountry, fromCcy:this.state.fromCurrency,toCcy:this.state.toCurrency,
        fromAmount:this.state.fromAmount, toAmount:2606.12})
        
    }
        render(){
            return(
                <CurrencyRateMain {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            )
        }
}
export default Customer;
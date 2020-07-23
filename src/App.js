import React from 'react';

//import {Cards,Chart,CountryPicker}from './components';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchData} from './api';
import image from '../src/img/covid.jpg'

class App extends React.Component  {
    state={data:'',
    country:''
      };
  
    async componentDidMount(){
       const fetchedData=await fetchData();
       this.setState({data:fetchedData}); 
     //  console.log(fetchedData);
    }
    handleCountryChange=async(country)=>{
     
      const fetchedData=await fetchData(country);
      console.log('sss',fetchedData);
      this.setState({data:fetchedData,country:country})
    }

    render(){
  return(
    <div className={styles.container}>
        <img className={styles.img} src={image}/>
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data}country={this.state.country} />
    </div>
   );

 }}

export default App;
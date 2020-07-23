import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';

import {fetchCountries} from '../../api';



const CountryPicker = ({handleCountryChange}) => {
  const[fetchedcountries,setFetchedCountries]=useState([]);

  useEffect(()=>{
    const fetch=async()=>{
      setFetchedCountries(await fetchCountries());
    }

    fetch();
  },[setFetchedCountries]);

 // console.log('countrie',fetchedcountries);
  return(
    <FormControl className={styles.formControl}>
      <NativeSelect  defaultValue="" onChange={e=>{handleCountryChange(e.target.value)}}>
        <option value="">
          Global
        </option>
        {fetchedcountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
   )
  }


export default CountryPicker;
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../config'
import { useParams } from "react-router-dom"

import BenefitBox from '../components/benefitBox'

const Search = () => {
  const [list, setList] = useState([]);
  const [loading, isLoading] = useState(true);
  let { value } = useParams();

  useEffect(() => {
    isLoading(true);
    axios.get(`${baseUrl}/landing/search?search=${value}`)
    .then(res => {
      const list = res.data.rewards;
      setList(list);
      isLoading(false);
    })
  }, [value]);

  if (loading) {
    return <div />
  }
  return(
    <div className="benefit-view">
      <BenefitBox list={list} title={value} />
    </div>
  );
}

export default Search

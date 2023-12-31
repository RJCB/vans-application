import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const VansList = () => {
  const [vans, setVans] = useState([]);

  const fetchVansList = async () => {
    try {
      const response = await fetch("/api/vans");
      const data = await response.json();
      setVans(data.vans);
    } catch (error) {
      console.log("Failed to fetch");
    }
  }

  useEffect(() => {
    fetchVansList();
  }, []);

  const vanElements = vans?.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`} >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our Van options</h1>
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  )
}

export default VansList
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobOffers() {
  const [offers, setOffers] = useState([]);


  useEffect(() => {
    const fetchOffers = async () => {
      const { data } = await axios.get('http://localhost:5127/api/JobOffers');
      setOffers(data);
    };

    fetchOffers();
  }, []);

  return (
    <div>
      <h1>Job Offers</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Location</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {offers.map(offer => (
            <tr key={offer.id}>
              <td>{offer.title}</td>
              <td>{offer.description}</td>
              <td>{offer.location}</td>
              <td>{offer.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobOffers;
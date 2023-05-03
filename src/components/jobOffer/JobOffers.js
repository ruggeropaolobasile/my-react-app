import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; // Importa il file CSS


function JobOffers() {
  const [offers, setOffers] = useState([]);
  const [isAddingOffer, setIsAddingOffer] = useState(false);
  const [newOffer, setNewOffer] = useState({});

  const handleAddOfferClick = () => {
    setIsAddingOffer(true);
  };

  const handleNewOfferChange = (event) => {
    setNewOffer({ ...newOffer, [event.target.name]: event.target.value });
  };

  const handleAddOfferSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:5127/api/JobOffers', newOffer);
    setNewOffer({});
    setIsAddingOffer(false);
    fetchOffers();
  };

  const fetchOffers = async () => {
    const { data } = await axios.get('http://localhost:5127/api/JobOffers');
    setOffers(data);
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div>
      <h1>Job Offers</h1>
      <button onClick={handleAddOfferClick}>Add Job Offer</button>
      {isAddingOffer && (
        <form onSubmit={handleAddOfferSubmit}>
          <label>
            Title:
            <input type="text" name="title" onChange={handleNewOfferChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description" onChange={handleNewOfferChange} />
          </label>
          <label>
            Location:
            <input type="text" name="location" onChange={handleNewOfferChange} />
          </label>
          <label>
            Salary:
            <input type="text" name="salary" onChange={handleNewOfferChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
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
          {offers.map((offer) => (
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

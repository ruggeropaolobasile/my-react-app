import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal"; // Importa il componente Modal
import "./styles.css"; // Importa il file CSS

function JobOffers() {
  const [offers, setOffers] = useState([]);
  const [isAddingOffer, setIsAddingOffer] = useState(false);
  const [newOffer, setNewOffer] = useState({});
  const [selectedOffer, setSelectedOffer] = useState(null); // Aggiungi lo stato per la selezione dell'offerta
  const [isModalOpen, setIsModalOpen] = useState(false); // Aggiungi lo stato per la visualizzazione del modale
  const [error, setError] = useState(null); // Aggiungi lo stato per gli errori

  const handleAddOfferClick = () => {
    setIsAddingOffer(true);
  };

  const handleNewOfferChange = (event) => {
    setNewOffer({ ...newOffer, [event.target.name]: event.target.value });
  };

  const handleAddOfferSubmit = async (event) => {
    event.preventDefault();
  
    try {
      await axios.post("http://localhost:5127/api/JobOffers", newOffer);
      setNewOffer({});
      setIsAddingOffer(false);
      setError(null); // Resetta l'errore
      fetchOffers();
    } catch (error) {
      const errorMessage = error.response?.data?.title || "Error adding job offer.";
      setError(errorMessage);
    }
  };

  const fetchOffers = async () => {
    try {
      const response = await axios.get("http://localhost:5127/api/JobOffers");
      if (response.data) {
        setOffers(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const handleOfferClick = (offer) => {
    if (offer.description.length > 100) {
      // Verifica se la descrizione supera i 100 caratteri
      setSelectedOffer(offer);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formatDate = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    return new Date(date).toLocaleString("it-IT", options);
  };

  return (
    <div>
      <h1>Job Offers</h1>
      <button onClick={handleAddOfferClick}>Add Job Offer</button>
      {isAddingOffer && (
        <form onSubmit={handleAddOfferSubmit}>
        <label>
  Title:
  <input type="text" name="title" onChange={handleNewOfferChange} />
  {error && error.errors && error.errors.Title &&
    <div style={{ color: "red" }}>{error.errors.Title[0]}</div>
  }
</label>
        

          <label>
            Description:
            <input
              type="text"
              name="description"
              onChange={handleNewOfferChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              onChange={handleNewOfferChange}
            />
          </label>
          {error &&
            error.response &&
            error.response.data &&
            error.response.data.errors &&
            error.response.data.errors.Location && (
              <div style={{ color: "red" }}>
                {error.response.data.errors.Location[0]}
              </div>
            )}
          <label>
            Salary:
            <input type="text" name="salary" onChange={handleNewOfferChange} />
          </label>
          <label>
            Expiration date:
            <input
              type="date"
              name="expirationDate"
              onChange={handleNewOfferChange}
            />
          </label>

          <button type="submit">Submit</button>


{error && (
  <div style={{ color: "red" }}>{error}</div>
)}





        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Published At</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer.id} onClick={() => handleOfferClick(offer)}>
              <td>{offer.title}</td>
              <td>
                {offer.description.length > 100
                  ? `${offer.description.slice(0, 100)}...`
                  : offer.description}
              </td>
              <td>{offer.location}</td>
              <td>{offer.salary}</td>
              <td>{formatDate(offer.publishedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        {" "}
        // Aggiungi il componente Modal
        <h2>{selectedOffer && selectedOffer.title}</h2>
        <p>{selectedOffer && selectedOffer.description}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default JobOffers;

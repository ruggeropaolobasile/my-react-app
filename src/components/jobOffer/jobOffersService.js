export const addJobOffer = (newJobOffer) => {
    return fetch('/api/joboffers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJobOffer)
    })
      .then(response => response.json())
      .catch(error => console.error(error));
  };
  
// service.js

const postUserData = async (userData) => {
    try {
      const requestBody = JSON.stringify(userData);
      const response = await fetch('https://lime-stormy-jaguar.cyclic.app/userDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error sending data to the server:', error);
      throw error;
    }
  };
  
  export default postUserData;
  
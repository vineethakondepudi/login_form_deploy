// FormDetail.js
import React from 'react';

const FormDetail = ({ email, password }) => {
  return (
    <div>
      <h2>Form Details</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default FormDetail;

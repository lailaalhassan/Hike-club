import React, { useState } from 'react';
import axios from 'axios';

function Trails() {
  const [data, setData] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    try {
      const response = await axios.post('http://localhost/api/add-to-sql-file', { data }); // Update URL for backend API
      alert(response.data.message);
    } catch (error) {
      console.error('Error adding to SQL file:', error);
      alert('Failed to add to SQL file.');
    }
  };

  return (
    <div className="container">
      {/* First Form */}
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Second Form */}
      <div className="container mt-4">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <h1>Add to SQL File</h1>
            <input
              type="text"
              placeholder="Enter data"
              value={data}
              className="form-control mb-3"
              onChange={(e) => setData(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Add to File</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Trails;

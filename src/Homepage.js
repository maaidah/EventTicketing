import React, { useState } from 'react';

function Homepage() {
  const [formData, setFormData] = useState({
    email: '',
    contactNumber: '',
    ticketType: '', // No default ticket type initially
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Your logic for handling form submission with formData
    console.log(formData); // For demonstration: log form data to the console
  };

  return (
    <div>
      <h1>Event Ticketing Corner</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            required
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            placeholder="Enter contact number"
            required
          />
        </label>
        <br />
        <label>
          Ticket Type:
          <select
            name="ticketType"
            value={formData.ticketType}
            onChange={handleInputChange}
            required // Make the field required
          >
            <option value="">Select an option</option> {/* Default option */}
            <option value="concert">Concert</option>
            <option value="sports">Sports</option>
            <option value="theatre">Theatre Performance</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <br />
        <button type="submit">Purchase Tickets</button>
      </form>
    </div>
  );
}

export default Homepage;

// import React from 'react';

// function Homepage() {
//   // Function to handle form submission
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Your logic for handling form submission (e.g., sending data to a server)
//     // Add your code here
//   };

//   return (
//     <div>
//       <h1>Event Ticketing Corner</h1>
//       <form onSubmit={handleFormSubmit}>
//         {/* Form inputs for ticket purchasing and management */}
//         <label>
//           Event Name:
//           <input type="text" placeholder="Enter event name" />
//         </label>
//         {/* Other input fields (e.g., ticket quantity, payment info, etc.) */}
//         <button type="submit">Purchase Tickets</button>
//       </form>
//     </div>
//   );
// }

// export default Homepage;


import React, { useState } from 'react';

function Homepage() {
  const [formData, setFormData] = useState({
    email: '',
    contactNumber: '',
    ticketType: 'concert', // Default ticket type
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
          >
            <option value="concert">Concert</option>
            <option value="sports">Sports</option>
            <option value="theatre">Theatre Performance</option>
            
          </select>
        </label>
        <br />
        <button type="submit">Purchase Ticket</button>
      </form>
    </div>
  );
}

export default Homepage;

import React from 'react';
import Header from '../header/Header';
import './peronslInformation.css';

const PersonalInfo = ({ formData, updateFormData, nextStep }) => {

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData({
      ...formData,
      [name]: value
    });
  };

  const handleHobbyChange = (index, event) => {
    const newHobbies = formData.hobbies.map((hobby, hobbyIndex) => {
      if (index === hobbyIndex) {
        return event.target.value;
      }
      return hobby;
    });

    updateFormData({
      ...formData,
      hobbies: newHobbies
    });
  };

  const addHobby = () => {
    const newHobbies = formData.hobbies.concat('');
    if (newHobbies.length <= 5) {
      updateFormData({
        ...formData,
        hobbies: newHobbies
      });
    }
  };

  const removeHobby = (index) => {
    const newHobbies = formData.hobbies.filter((_, hobbyIndex) => index !== hobbyIndex);
    updateFormData({
      ...formData,
      hobbies: newHobbies
    });
  };

  const handleImageChange = (event) => {
    updateFormData({
      ...formData,
      profileImage: event.target.files[0]
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <div>
      <Header phase={1} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name <span className="required-asterisk">*</span></label>
        <input type="text" id="name" placeholder='John Doe' required value={formData.name} onChange={handleInputChange} />
        
        <label htmlFor="email">Email <span className="required-asterisk">*</span></label>
        <input type="email" id="email" placeholder='abc@xyz.com' required value={formData.email} onChange={handleInputChange} />
        
        <label htmlFor="phone">Phone Number <span className="required-asterisk">*</span></label>
        <input type="tel" id="phone" placeholder='01XXXXXXXXX' required pattern="01[347895]{1}[0-9]{8}" value={formData.phoneNumber} onChange={handleInputChange} />
        
        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder='2464 Royal Ln, Mesa, New Jersey 45463' value={formData.address} onChange={handleInputChange} />
        
        <label htmlFor="hobbies">Hobbies (max 5)</label>
        <div className="hobbies-container">
          {formData.hobbies && formData.hobbies.map((hobby, index) => (
            <div key={index}>
              <input type="text" placeholder='Write your hobby' value={hobby} onChange={(e) => handleHobbyChange(index, e)} />
              {formData.hobbies.length > 1 && (
              <button type="button" className="remove-hobby-button" onClick={() => removeHobby(index)}>X</button>)}
            </div>
          ))}
          {formData.hobbies && formData.hobbies.length < 5 && (
            <button type="button" onClick={addHobby}>+</button>
          )}
        </div>
        <label htmlFor="image">Image</label>
        <input type="file" id="image"onChange={handleImageChange} />
         
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default PersonalInfo;

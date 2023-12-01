import React from 'react';
import Header from '../header/Header';
import './educationBackground.css'

const EducationalBackground = ({ formData, updateFormData, nextStep, prevStep }) => {

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <div>
      <Header phase={2} />
      <form onSubmit={handleSubmit}>

        <label htmlFor="highestDegree">Highest Degree</label>
        <select id="highestDegree" name="highestDegree" value={formData.highestDegree || ''} onChange={handleInputChange}>
          <option value="bachelors">Choose one</option>
          <option value="bachelors">Bachelor's</option>
          <option value="masters">Master's</option>
          <option value="phd">PhD</option>
        </select>
        
        <label htmlFor="fieldOfStudy">Field of Study</label>
        <input type="text" id="fieldOfStudy" name="fieldOfStudy" placeholder='CSE' value={formData.fieldOfStudy || ''} onChange={handleInputChange} />
        
        <label htmlFor="institutionName">Institution Name</label>
        <input type="text" id="institutionName" name="institutionName" placeholder='Institution Name' value={formData.institutionName || ''} onChange={handleInputChange} />
        
        <label htmlFor="graduationYear">Graduation Year</label>
        <input type="text" id="graduationYear" name="graduationYear" placeholder='2023' value={formData.graduationYear || ''} onChange={handleInputChange} />
        
        <div>
          <button type="button" onClick={prevStep}>Previous</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default EducationalBackground;

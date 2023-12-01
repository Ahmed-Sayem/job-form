import {useState} from 'react';
import Header from '../header/Header';
import './workExperience.css'
import Modal from '../Modal/modal';

const WorkExperience = ({ formData, updateFormData, prevStep }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData({
      ...formData,
      [name]: value
    });
  };

   const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true); 
  };

  return (
    <div>
      <Header phase={3} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name</label>
        <input type="text" id="companyName" name="companyName" placeholder='Company name here' value={formData.companyName || ''} onChange={handleInputChange} />

        <label htmlFor="positionHeld">Position Held</label>
        <input type="text" id="positionHeld" name="positionHeld" placeholder='Junior Developer' value={formData.positionHeld || ''} onChange={handleInputChange} />

        <label htmlFor="employmentDuration">Employment Duration</label>
        <input type="text" id="employmentDuration" name="employmentDuration" placeholder='6 Months' value={formData.employmentDuration || ''} onChange={handleInputChange} />

        <label htmlFor="jobDescription">Description</label>
        <textarea id="jobDescription" name="jobDescription" placeholder='Description' value={formData.jobDescription || ''} onChange={handleInputChange}></textarea>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Form Details</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
      </Modal>

        <div>
          <button type="button" onClick={prevStep}>Previous</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default WorkExperience;

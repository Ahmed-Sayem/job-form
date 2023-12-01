
import { useState } from 'react';
import PersonalInfo from './personal/PersonalInformation';
import EducationalBackground from './education/EducationalBackground';
import WorkExperience from './experience/WorkExperience';

const FullForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    hobbies: [''],
    profileImage: null,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateFormData = (newData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...newData
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
      case 2:
        return <EducationalBackground formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <WorkExperience formData={formData} updateFormData={updateFormData} prevStep={prevStep} />;
      default:
        return <div>Form Completed</div>;
    }
  };

  return <>{renderStep()}</>;
};

export default FullForm;

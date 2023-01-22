import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imageBackground from '../../assets/nature2.jpg';
import Footer from '../Footer.js';
import Checkbox from '@mui/material/Checkbox';

const steps = ['Personal Details', 'Educational and Income Details', 'Upload Documents'];
const stepContent = [
  <div className="form first">
    <div className="details personal">
      <div className="fields">
        
        <div className="input-field">
            <label>Full Name *</label>
            <input type="text" placeholder="Enter your name" required/>
        </div>

        <div className="input-field">
            <label>Date of Birth *</label>
            <input type="date" placeholder="Enter birth date" required/>
        </div>

        <div className="input-field">
            <label>Email *</label>
            <input type="text" placeholder="Enter your email" required/>
        </div>

        <div className="input-field">
            <label>Mobile Number *</label>
            <input type="text" placeholder="Enter mobile number" required/>
        </div>

        <div className="input-field">
            <label>Gender *</label>
            <select required defaultValue='default'>
                <option disabled value='default'>Select gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Others</option>
            </select>
        </div>

        <div className="input-field">
            <label>Degree *</label>
            <input type="text" placeholder="Enter your Degree" required/>
        </div>
      </div>
    </div>

    <div className="details ID">
      <div className="fields">
        <div className="input-field">
            <label>Roll No. *</label>
            <input type="text" placeholder="Enter Roll No." required/>
        </div>

        <div className="input-field">
            <label>Branch *</label>
            <select required>
                <option disabled selected>Enter your Branch</option>
                <option>Computer Engineering</option>
                <option>Information Technology</option>
                <option>Electical Engineering</option>
                <option>Eletronics Engineering</option>
                <option>Eletronics & Communications Engineering</option>
                <option>Textile Technology</option>
                <option>Mechanical Engineering</option>
                <option>Civil Engineering</option>
                <option>Production Engineering</option>
            </select>
        </div>

        <div className="input-field">
            <label>Year of Study *</label>
            <select required>
                <option disabled selected>Year of Study</option>
                <option>Second Year</option>
                <option>Direct Second Year</option>
                <option>Third Year</option>
            </select>
        </div>
      </div>
    </div> 
  </div>, 
  <div className="form first">
  <div className="details personal">
    <div className="fields">
      
      <div className="input-field">
          <label>Father/Mother Name *</label>
          <input type="text" placeholder="Father/Mother Name" required/>
      </div>

      <div className="input-field">
          <label>Enter parent's occupation *</label>
          <input type="text" placeholder="Enter parent's occupation" required/>
      </div>

      <div className="input-field">
          <label>Enter family Income *</label>
          <input type="text" placeholder="Enter family Income" required/>
      </div>

      <div className="input-field">
          <label>Enter SSC passing year *</label>
          <input type="text" placeholder="Enter passing year" required/>
      </div>

      <div className="input-field">
          <label>Enter SSC percentages or CPI *</label>
          <input type="text" placeholder="Enter percentages or CPI" required/>
      </div>

      <div className="input-field">
          <label>Enter SSC passing place *</label>
          <input type="text" placeholder="Enter passing place" required/>
      </div>

      <div className="input-field">
          <label>Enter HSC passing year (For Degree Students)</label>
          <input type="text" placeholder="Enter passing year" required/>
      </div>

      <div className="input-field">
          <label>Enter HSC percentages or CPI </label>
          <input type="text" placeholder="Enter percentages or CPI" required/>
      </div>

      <div className="input-field">
          <label>Enter HSC passing place </label>
          <input type="text" placeholder="Enter passing place" required/>
      </div>

      <div className="input-field">
          <label>Enter year of 1<sup>st</sup> year passing (For Degree Students)</label>
          <input type="text" placeholder="Enter passing year" required/>
      </div>

      <div className="input-field">
          <label>Enter First year CPI </label>
          <input type="text" placeholder="Enter CPI" required/>
      </div>

      <div className="input-field">
          <label>Enter 1<sup>st</sup> year passing place </label>
          <input type="text" placeholder="Enter passing place" required/>
      </div>

      <div className="input-field">
          <label>Enter year of Diploma 3<sup>rd</sup> year passing</label>
          <input type="text" placeholder="Enter passing year" required/>
      </div>

      <div className="input-field">
          <label>Enter Diploma 3<sup>rd</sup> Year percentages or CPI </label>
          <input type="text" placeholder="Enter percentages or CPI" required/>
      </div>

      <div className="input-field">
          <label>Enter Diploma 3<sup>rd</sup> Year passing place</label>
          <input type="text" placeholder="Enter passing place" required/>
      </div>
    </div>
  </div>
  </div>, 
  <div className="form first">
  <div className="details personal">
    <div className="fields">
      
      <div className="input-field">
          <label>Upload Photo *</label>
          <input type="file" placeholder="Father/Mother Name" required/>
      </div>

      <div className="input-field">
          <label>Upload Signature *</label>
          <input type="text" placeholder="Enter parent's occupation" required/>
      </div>

      <div className="input-field">
          <label>Upload Family Income Certificate (Current Year) *</label>
          <input type="text" placeholder="Enter family Income" required/>
      </div>

      <div className="input-field">
          <label>Upload SSC Marksheet *</label>
          <input type="text" placeholder="Enter passing year" required/>
      </div>

      <div className="input-field">
          <label>Upload HSC Marksheet</label>
          <input type="text" placeholder="Enter percentages or CPI" required/>
      </div>

      <div className="input-field">
          <label>Upload 1<sup>st</sup> Year Marksheet (For Degree Students)</label>
          <input type="text" placeholder="Enter passing place" required/>
      </div>

      <div className="input-field">
          <label>Upload Diploma 3<sup>rd</sup> Year Marksheet (For Direct 2<sup>nd</sup> Year Students)</label>
          <input type="text" placeholder="Enter passing year" required/>
      </div>

     
    </div>
    <div className='student-undertaking-div'>
      <div><Checkbox /></div>
       <div>The documents provided by me are correct and in the event of those being found to be forged or if I violate the terms and conditions of the Scholarship, the Scholarship sanctioned to me, may be cancelled and the entire amount of scholarship will be refunded by me or recovered from me, apart from liability for such penal action as warranted by law or Institute Authority and Ministry.</div>
    </div>
  </div>
  </div>];

export default function JoinAsStudent() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="main-tab-div">
        <div className="background">
          <img src={imageBackground} className="background-image" alt="" />
        </div>
        <div className="tab-description">
          <div className="detail">
          <Box sx={{ width: '100%' }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                 
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Box> 
                    <div className='container'>
                    <form action="#">
                      {stepContent[activeStep]}
                    </form>
                    </div>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />

                    <Button onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </div>
          {<Footer/>}
        </div> 
      </div>
    
  );
}

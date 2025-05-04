import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function BMICalculator() {
    const [height,setHeight]= useState('');
    const [weight,setWeight]= useState('');
    const [bmi,setBmi]= useState('');
    const [gender,setGender]= useState('');

    const calculateBMI = (e) => {
        e.preventDefault();

        if (!height|| !weight || !gender) {
            toast.error('Please enter required fields');
            return;
        }
        const heightInMeters = height / 100; // Convert height to meters
        const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(calculatedBMI); // Set BMI state with 2 decimal places

        if (calculatedBMI < 18.5) {
            toast.warning('You are underweight');
        }
        else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
            toast.success('You are normal weight');
        } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
            toast.warning('You are overweight');
        } else {
            toast.error('You are obese');
        }
    }
  return (
   <section className='bmi'>
    <h1>BMI Calculator</h1>
    <div className="container">
        <div className="wrapper">
            <form onSubmit={calculateBMI}>
                <div>
                    <label htmlFor="height">Height (cm)</label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="weight">Weight (kg)</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                  <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select>
                </div>
                <button type='submit'>Calculate</button>
                </form>
                
        </div>
        <div className="wrapper">
            <img src="/bmi.jpg" alt="Calculate BMI" />
        </div>
    </div>
   </section>
  )
}

export default BMICalculator
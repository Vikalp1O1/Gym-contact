import axios from 'axios';
import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

function Contact() {
  const [name,setName]= useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const[loading, setLoading] = useState(false);


  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {data} = await axios.post('http://localhost:4001/send/email', {
        name,
        email,
        message,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    setName('');
    setEmail('');
    setMessage('');
    toast.success(data.message);
    setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
   
  }

  return (
    <section className='contact' id='contact'>
      <form onSubmit={sendEmail}>
        <h1>Contact Us</h1>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' value={name} onChange={(e)=>setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email'value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)} required />
        </div>
        <button type='submit' disabled={loading} style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}} >  {loading && <ClipLoader size={20} color='white'></ClipLoader>}  Submit</button>
      </form>
    </section>
  )
}

export default Contact
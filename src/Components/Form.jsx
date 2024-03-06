import { useState } from 'react';
import React from 'react';
import ContactImg from '../assets/Google_Contacts_icon.png'
import axios from 'axios';


export default function Form () {
  //state
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');

//event handler
const handleSubmit=(e)=>{
  e.preventDefault();
  const data={
    Name: name,
    Email: email,
    Phone: phone,
    Message: message,
  }
  axios.post('https://sheet.best/api/sheets/fbe5c410-f7bb-4d38-b6c7-df15429d71c3',data).then((response)=>{
    console.log(response);
    //Clear form fields
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
  })
}

  return (
    <form className='card '>
      <img className='card-img ' src={ContactImg} alt='Logo'/>
        <div className='form-group'>
          <div>
          <label className='form-label'>Name:</label>
          <input type="text"  id='field' placeholder='Enter your full name' 
           onChange={(e)=>setName(e.target.value)} value={name} />
          <span></span>
          </div>

          <div>
          <label htmlFor="email" className='form-label'>Email:</label>
          <input type="email"  id='field' placeholder='Enter Email' 
           onChange={(e)=>setEmail(e.target.value)} value={email} /> 
          <span></span>
          </div>  

          <div>
          <label htmlFor="phone" className='form-label'>Phone:</label>
          <input type="tel" pattern='[0-9]{10}' id='field' placeholder='Enter phone number'
           onChange={(e)=>setPhone(e.target.value)} value={phone} />
          <span></span>
          </div>
          
          <div>
          <label htmlFor="message" className='form-label'>Message:</label>
          <input type="text"  id='field' placeholder='Your message'
           onChange={(e)=>setMessage(e.target.value)} value={message} />
          </div>
          
          <button type="submit" className='form-button' onClick={handleSubmit}>Submit</button>
        </div>
    </form>
    
  );
};


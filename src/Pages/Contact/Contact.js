import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Layout from '../../Components/Layout/Layout';
import './Contact.css';
import contactImage from '../../Assets/Images/contactForm.svg';
import emailjs from '@emailjs/browser';
import { AlignStart } from 'react-bootstrap-icons';
import contactImg from '../../Assets/Images/contactPage.svg';
const Contact = () => {
 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gizan101', 'template_7p6kgpc', e.target, 'BdtLBaVPBE1d0CAra')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert('mail sent');
  };

  return (
    <Layout>
      <div className="row mt-5">
        <div className="col-md-6 formStyle">
          <h1>Text us Here.</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label className="labelStyle">Name</label> <br></br>
            <input className="form-control" type="text" name="name" />
            <br></br>
            <label className="labelStyle">Email</label>
            <br></br>
            <input className="form-control" type="email" name="email" />
            <br></br>
            <label className="labelStyle">Message</label>
            <br></br>
            <textarea className="form-control" name="message" />
            <br></br>
            <input className="btn btn-outline-danger" type="submit" value="Send" />
          </form>
        </div>
        <div className="col-md-6">
          <img className="generalImage" src={contactImg}></img>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

// const onClickHandler = (e) => {
//   e.preventDefault();
//   const nEmail = document.getElementById('emailInput').value;
//   console.log(nEmail);
//   const nPhone = document.getElementById('phoneInput').value;
//   const nMessage = document.getElementById('messageInput').value;
//   const newMessage = {
//     email: nEmail,
//     phone: nPhone,
//     message: nMessage,
//   };
//   console.log(newMessage);
// };
//   <div className="contactCards">

//   Contact Form
//   <div className="contactForm mt-5">
//     <div className="row">
//       <div className="col-md-7 ">
//         <h1>Text Us Here</h1>
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               className="commonFormStyle"
//               placeholder="Enter email"
//               id="emailInput"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Phone</Form.Label>
//             <Form.Control
//               variant="warning"
//               className="commonFormStyle"
//               type="phone"
//               placeholder="Phone"
//               id="phoneInput"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Example textarea</Form.Label>
//             <Form.Control
//               className="commonFormStyle"
//               variant="warning"
//               as="textarea"
//               id="messageInput"
//               rows={3}
//             />
//           </Form.Group>

//           <Button
//             className="commonButtonStyle"
//             variant="warning"
//             type="submit"
//             onClick={onClickHandler}
//           >
//             Submit
//           </Button>
//         </Form>
//       </div>
//       <div className="col-md-5 my-5 ">
//         <img
//           className="contactFormImage py-3 px-3"
//           src={contactImage}
//           alt="banner"
//         />
//       </div>
//     </div>
//   </div>
// </div>

{
  /* <div className="row mt-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="contactCard">
              <h3>icon</h3>
              <h3>Card 1 / your style</h3>
              <h3>details</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="contactCard">
              <h3>icon</h3>
              <h3>Card 2</h3>
              <h3>Anything</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="contactCard">
              <h3>icon</h3>
              <h3>card 3</h3>
              <h3>Location</h3>
            </div>
          </div>
        </div> */
}

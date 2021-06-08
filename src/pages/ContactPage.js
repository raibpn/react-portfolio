import React from 'react';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import phone from '../assets/images/phone.png';
import mail from '../assets/images/mail.png';
import address from '../assets/images/address.png';


// class ContactPage extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             message: '',
//             disabled: false,
//             emailSent: null,
//         }
//     }


//     handleChange = (event) => {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         })
//     }


//     handleSubmit = (event) => {
//         event.preventDefault();

//         console.log(event.target);

//         this.setState({
//             disabled: true
//         });

//         Axios.post('http://localhost:3030/api/email', this.state)
//             .then(res => {
//                 if(res.data.success) {
//                     this.setState({
//                         disabled: false,
//                         emailSent: true
//                     });
//                 } else {
//                     this.setState({
//                         disabled: false,
//                         emailSent: false
//                     });
//                 }
//             })
//             .catch(err => {
//                 console.log(err);

//                 this.setState({
//                     disabled: false,
//                     emailSent: false
//                 });
//             })

//     }


//     render() {
//         return(
//             <div>
//                 <Hero title={this.props.title} />

//                 <Content>
//                     <Form onSubmit={this.handleSubmit}>
//                         <Form.Group>
//                             <Form.Label htmlFor="full-name">Full Name</Form.Label>
//                             <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
//                         </Form.Group>


//                         <Form.Group>
//                             <Form.Label htmlFor="email">Email</Form.Label>
//                             <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
//                         </Form.Group>


//                         <Form.Group>
//                             <Form.Label htmlFor="message">Message</Form.Label>
//                             <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
//                         </Form.Group>


//                         <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
//                             Send
//                         </Button>


//                         {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
//                         {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
//                     </Form>
//                 </Content>
//             </div>
//         );
//     }

// }

// export default ContactPage;

class ContactPage extends React.Component {

    render() {
        return (
  <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title">Contact <span>info</span></h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <div className="icon"><img src={phone} alt="img"></img></div>
          <div className="contact-info">
            <h1>Phone</h1>
            <h2>+1 234 123 1234</h2>
            <h2>+1 234 123 1234</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src={mail} alt="img"/></div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2>info@gmail.com</h2>
            <h2>abcd@gmail.com</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src={address} alt="img"/></div>
          <div className="contact-info">
            <h1>Address</h1>
            <h2>valby 2500, Copenhagen </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
        );
    }
    
}

export default ContactPage;

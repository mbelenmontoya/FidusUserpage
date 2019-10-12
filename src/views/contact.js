import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";

const Form = () => {
  return (
    <form className="contact-form">
      <input className="contact-input" type="text" placeholder="Nombre" name="nombre" />
      <input className="contact-input" type="email" placeholder="Email" name="email" />
      <textarea className="contact-textarea" placeholder="Mensaje" name="mensaje"></textarea>
      <button className="contact-button" type="submit" name="submit">Enviar</button>
     </form>
  );
}

const Button = () => {
  return (
    <div className="contact-business">
      <p className="contact-paragraph">Te invitamos a pasar por nuestra página de Negocios <br />
      y aprender más sobre cómo asociarte a nosotros.</p>
      <button className="contact-button" type="submit" name="submit">Ir a Negocios</button>
    </div>
  );
}

const Contact = ({ match }) => {
  const [activeTab, setActiveTab] = useState('user');
  const isUser = activeTab === 'user';

  return (
    <Router>
      <div className="contact">
      <div className="contact-content">
          <h2 className="contact-title">¿Cómo podemos ayudarte?</h2>
          <ul className="contact-list">
            <li onClick={() => setActiveTab('user')} className={`contact-item ${isUser ? '-active' : ''}`}>
              <p className="contact-link">Soy Usuario</p>
            </li>
            <li onClick={() => setActiveTab('business')} className={`contact-item ${isUser ? '' : '-active'}`}>
              <p className="contact-link">Soy Comercio</p>
            </li>
          </ul>
          <div>
            {isUser ? <Form /> : <Button />}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Contact

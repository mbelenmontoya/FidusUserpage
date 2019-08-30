import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <p className="contact-paragraph">Te invitamos a pasar por nuestras página de Negocios, <br />
      y aprender más sobre cómo asociarte a nosotros.</p>
      <button className="contact-button" type="submit" name="submit">Ir a Negocios</button>
    </div>
  );
}

function Response({ match }) {
  return (
    <div>
      {match.params.contactId === 'user' ? <Form /> : <Button />}
    </div>
  );
}

const Contact = ({ match }) => {
  return (
    <Router>
      <div className="contact">
      <div className="contact-content">
          <h2 className="contact-title">¿Cómo podemos ayudarte?</h2>
          <ul className="contact-list">
            <li className="contact-item -active">
              <Link to={`${match.url}/user`} className="contact-link">Soy Usuario</Link>
            </li>
            <li className="contact-item">
              <Link to={`${match.url}/business`} className="contact-link">Soy Comercio</Link>
            </li>
          </ul>
          <Route path={`${match.path}/:contactId`} render={() => <Form />} component={Response} />
        </div>
      </div>
    </Router>
  );
}

export default Contact
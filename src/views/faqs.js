import React from 'react'

const faqs = [
  {title: 'Cómo funciona Fidus?',
  paragraph: 'Fidus es una App/tarjeta de cliente frecuente gratis que te permite sumar puntos y aprovechar beneficios o descuentos en los locales adheridos que visitas frecuentemente'},
  {title: 'Puedo usar mi tarjeta mientras tengo la app?',
  paragraph: 'Si, la App y la tarjeta son complementarias y conectadas con tu cuenta. Podés escanear el QR de tu tarjeta o de tu App para sumar puntos y aprovechar los beneficios y descuentos'},
  {title: 'Cómo conectar mi tarjeta a la App?',
  paragraph: 'Tenías la trajeta primero: cuando bajás la App podés vincular tu tarjeta directamente con la App, escaneando el QR de la tarjeta. Tenías la App primero: anda en la pestaña en la izquierda y tocá escanear tarjeta física'},
  {title: 'Fidus es gratis?',
  paragraph: 'Fidus es 100% gratis, solo tenés que registrarte por única vez con tu email, genero y fecha de nacimiento y podés approvechar beneficios infinitos.'},
  {title: 'Cómo funciona la App?',
  paragraph: '1- Bajá la App en AppleStore o GooglePlay (100% gratis) 2- Registrate por única vez con tu email, genero y fecha de nacimiento (o con tu cuenta Google) 3 - Explorá los locales adheridos cerca de vos sobre la mapa 4 - Ve a uno de los locales adheridos y escaneá tu QR (arriba en la derecha de tu App) 5 - Sumá puntos y aprovechá los beneficios y descuentos'},
  {title: 'Cuando y cómo puedo usar mis puntos?',
  paragraph: 'Cada local definió un nivel de puntos para cada beneficio, cuando llegues al nivel determinado la recompensa aparecerá en azul. Al tocarla, te pide dos veces confirmar el canje y por ultimo tenés que mostrar la pantalla de la tablet al vendedor para aprovecharla.'},
  {title: 'Porqué en algunos locales sumo 20 puntos y en otros sumo otra cantidad?',
  paragraph: 'Los locales tienen la eleccion de tener puntos fijos o variables. Los que utilizan puntos fijos, automaticamente suman 20 puntos al escanear tu tarjeta o QR despues de cada compra. Los que utilizan puntos variables te suman una cantidad de puntos dependiendo del importe gastado en la compra'},
  {title: 'Hay alguna restriccion al escanear la tarjeta o el QR?',
  paragraph: 'Depende del local y sus necesidades. En la mayoria solo podés escanear la tarjeta una vez al dia'},
  {title: 'Los puntos tienen vencimiento?',
  paragraph: 'No, no tienen vencimiento'},
  {title: 'Dónde puedo consultar mis puntos?',
  paragraph: ''},
  {title: 'Los puntos sumados en un local adherido puedo utilizarlos en otro local?',
  paragraph: 'No, los puntos son intrasferibles de local en local. Solo podés canjearlos en el local en que los ganaste'},
  {title: 'Hay alguna manera de ver cuantos puntos disponibles que tengo en cada local?',
  paragraph: 'Si, en la App hay una sección de "Mis Comercios". Ahí podés revisar a cuales comercios has visitado y cuantos puntos tenés en cada uno'},
  {title: 'Mediante que vía puedo revisar los beneficios que tengo por ser miembro Fidus',
  paragraph: 'Los beneficios adicionales (que no tienen que ver con los puntos por compra) llegan a tu correo, dependiendo de las campañas de beneficios que tengan los locales adheridos que visitas'},
  {title: 'Me van a mandar muchos mails constantemente?',
  paragraph: ''},
  {title: 'Qué datos necesito para registrarme?',
  paragraph: ''},
  {title: 'Qué tipo de locales tienen Fidus',
  paragraph: 'Todo tipo de locales, listar categorñias'},
  {title: 'En dónode puedo encontrar Fidus',
  paragraph: ''},
  {title: 'Tengo que tener 1 tarjeta por cada local que visito?',
  paragraph: ''},
];

const Faqs = () => {
  return (
    <div className="faqs">
      <h2 className="section-title">Preguntas Frecuentes</h2>
        { faqs.map(({ title, paragraph }) => (
          <div className="faqs-container">
            <h3 className="terciary-title">{title}</h3>
            <p className="primary-paragraph">{paragraph}</p>
          </div>
        )) }
    </div>
  );
}

export default Faqs
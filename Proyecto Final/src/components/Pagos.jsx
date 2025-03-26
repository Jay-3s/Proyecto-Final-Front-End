import React, { useState } from 'react';
import '../styles/Pagos.css';
import Swal from 'sweetalert2';

const Pagos = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Se Realizó El Pago Correctamente",
      showConfirmButton: false,
      timer: 1500
    });
    
  };

  return (
    <div className="pasarela">
      <h2>Realiza Tu Pago Aquí</h2>
      
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="payment-methods">
          <h3>Selecciona un método de pago</h3>
          <label>
            <input type="radio" name="payment" value="Google Pay" onChange={(e) => setPaymentMethod(e.target.value)} />
            Google Pay
          </label>
          <label>
            <input type="radio" name="payment" value="Apple Pay" onChange={(e) => setPaymentMethod(e.target.value)} />
            Apple Pay
          </label>
          <label>
            <input type="radio" name="payment" value="Credit Card" onChange={(e) => setPaymentMethod(e.target.value)} />
            Tarjeta de Crédito
          </label>
        </div>

        <div className="personal-info">
          <h3>Detalles del pago</h3>
          <label>
            Nombre:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Dirección:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </label>
        </div>

        {paymentMethod === 'Credit Card' && (
          <div className="credit-card-info">
            <h3>Información de la Tarjeta</h3>
            <label>
              Número de tarjeta:
              <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
            </label>
            <label>
              Fecha de expiración:
              <input type="text" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} required />
            </label>
            <label>
              CVV:
              <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
            </label>
          </div>
        )}

        <button type="submit" className="submit-btn">Realizar Pago</button>
      </form>
    </div>
  );
};

export default Pagos;

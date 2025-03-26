import React, { useEffect } from 'react';
import Pagos from '../components/Pagos'

function SoloPagos() {

   useEffect(() => {
        document.body.classList.add('mi-pagina');
      }, []);

  return (
    <div>
        <Pagos />
    </div>
  )
}

export default SoloPagos
import React from "react";
import { useState } from "react";
import { BsZoomIn } from "react-icons/bs";
import api from './services/api';
import './styles.css';

function App() {

  const [Input, setInput] = useState('');

 async function search (){
    if(Input === ''){
      alert('digite um cep')
      return;
    }

    try{
      const response = await api.get('{Input}/json');
      console.log(response.data)
    }catch{

      alert('ops algum erro aconteceu!')
      setInput('')

    }
  }

  return (
    <div className="container">
        <h1 className="title">BUSCADOR DE CEP</h1>
        <div className="containerInput">
            <input type="text" placeholder="Busque aqui o seu cep..."
             value={Input}
             onChange={(e) => setInput(e.target.value)}
          />
          <button className="button" onClick={search}> 
            <BsZoomIn size="20px"/>
          </button>
        </div>
        <main className="main">
          <h2>Cep: 39403-018</h2>
            <span>Rua: quatorze</span>
            <span>complemento: casa</span>
            <span>Bairro: alterosa</span>
            <span>Montes claros-MG</span>
        </main>
    </div>
  );
}

export default App;

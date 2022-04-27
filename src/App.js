import React from "react";
import { useState } from "react";
import { BsZoomIn } from "react-icons/bs";
import api from './services/api';
import Header from './components/header'
import './styles.css';

function App() {

  const [Input, setInput] = useState('');
  const [Cep, setCep] = useState({});

 async function search (){
    if(Input === ''){
      alert('digite um cep')
      return;
    }

    try{
      const response = await api.get(`${Input}/json`);
      setCep(response.data);
      setInput('');
    }catch{

      alert('ops algum erro aconteceu!')
      setInput('')

    }
  }

  return (
    <div>
      <Header/>
      
      <div className="container">
        <h1 className="title">Digite Seu Cep Aqui!</h1>
        <div className="containerInput">
            <input type="text" placeholder="Busque aqui o seu cep..."
             value={Input}
             onChange={(e) => setInput(e.target.value)}
          />
          <button className="button" onClick={search}> 
            <BsZoomIn size="20px"/>
          </button>
        </div>


        {Object.keys(Cep).length > 0 && (

          <main className="main">
          <h2>Cep: {Cep.cep}</h2>
            <span>Logradouro: {Cep.logradouro}</span>
            <span>complemento: {Cep.complemento}</span>
            <span>Bairro: {Cep.bairro}</span>
            <span>Cidade: {Cep.localidade}</span>
            <span>Estado: {Cep.uf}</span>
            <span>DDD: {Cep.ddd}</span>
          </main>
        )}
        
    </div>
    </div>
    
  );
}

export default App;

import React, { useState, useEffect} from 'react';
import MenuLateral from "../../Components/MenuLateral/menu";
import CollectCard from "../../Components/CollectCard/collectCard";
import ButtonBack from "../../Components/ButtonBack/buttonBack";
import Chat from "../../Components/ChatBot/chat.js";
import {Container} from "@material-ui/core";
import 'react-pro-sidebar/dist/css/styles.css';
import { Form } from 'react-router-dom';
import api from "../../services/api";
import { ToastContainer, toast, Flip } from 'react-toastify';

function App() {

  const [collectRResponse, setCollectResponse] =  useState([])

  useEffect(() => {
    api
    .get("/getColetas")
    .then((response) =>  setCollectResponse(response.data))
    .catch(error => toast.error("ops! ocorreu um erro" + error));
    }, []);

    const result  = Array.from(collectRResponse).map(coleta =>(
      <CollectCard nomeCliente={coleta.nomeCliente} emailCliente={coleta.emailCliente} idColeta={coleta.idRegistroColeta}/>
    ))
  

  return(
    <>
    <Chat/>
    <MenuLateral/>
    <ButtonBack/>
    <Container maxWidth="sm" component="article" className="form">

      <h1 className="hr">Coletas</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
   
    {result}
     
        
   
      
     <ToastContainer/>


    </form>
    </Container>
    

    </>
  ); 
}

export default App;
import React from 'react';
import './Body.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

function Body(props){
const miFuncion=()=>{
  return alert("Hola mundo desde el Botón")
}
return(
      <div className="Body">

        <p>{props.practica}</p>
        {
          <ol>
          {
          props.temas.map((t,i)=>
            <li key={i}>{t}</li>
          )
          }
          </ol>
        }
        <Button onClick={()=>miFuncion()} variant="primary">Dale Click</Button>
      </div>
    )
}

export default Body;

Body.propTypes={
  practica:PropTypes.string.isRequired,
  temas:PropTypes.array,
}

Body.defaultProps={
  practica:"Hola mundo"
}
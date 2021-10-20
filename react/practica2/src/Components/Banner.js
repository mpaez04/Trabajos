import React from 'react';
import './Banner.css';
import PropTypes from 'prop-types';

function Banner({texto}){
return(
      <div className="Banner">
            {texto}

      </div>
    )
}

export default Banner;


Banner.propTypes={
      texto:PropTypes.string.isRequired,
}
  
Banner.defaultProps={
      texto:"Hola mundo"
}
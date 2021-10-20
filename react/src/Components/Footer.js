import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

function Footer({pie}){
return(
      <div className="Footer">

            {pie}

      </div>
    )
}

export default Footer;


Footer.propTypes={
      pie:PropTypes.object
}
  
Footer.defaultProps={
      pie:<h1>Holaaaaa.</h1>
}
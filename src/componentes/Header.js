import React from 'react';
import PropTypes from "prop-types";

const Header = ({titulo}) => (
    <h1>{titulo}</h1>
)
    



export default Header;


Header.propTypes = {
    titulo: PropTypes.string
   

}
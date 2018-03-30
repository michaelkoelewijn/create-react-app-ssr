import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from "../routes"
import { renderRoutes } from "react-router-config"

export default (props) => {
  return (
    <div>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      { renderRoutes(routes) }
    
    </div>
  )
}


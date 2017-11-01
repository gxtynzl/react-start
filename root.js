import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './app/routes'
import './app/assets/css/reset.css' 
import './app/assets/css/root.css'

render(
    <div className="root">
      <Router history={browserHistory} routes={routes}/>
    </div>,
    document.getElementsByTagName('body')[0]
  )

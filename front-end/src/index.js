import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './componentes/App'

ReactDom.render(
<BrowserRouter>
    <App/>
</BrowserRouter>
,window.document.getElementById('root'))
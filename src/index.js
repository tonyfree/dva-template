import React from 'react'
import dva from 'dva'
import './index.css'
import App from './layouts/App'

const app = dva()

app.model(require('./pages/users/model').default)

app.router(App)

app.start('#root')

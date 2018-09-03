import dva from 'dva'
import createHistory from 'history/createBrowserHistory';
import './index.css'
import App from './layouts/App'

const app = dva({
  history: createHistory()
})

app.model(require('./pages/users/model').default)

app.router(App)

app.start('#root')

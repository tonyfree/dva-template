import dva from 'dva'
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading'
import './index.css'
import App from './layouts/App'

const app = dva({
  history: createHistory()
})

app.use(createLoading())

app.model(require('./pages/users/model').default)

app.router(App)

app.start('#root')

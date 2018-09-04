import dva from 'dva'
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading'
import { message } from 'antd'
import { createLogger } from 'redux-logger'
import './index.css'
import App from './layouts/App'

const app = dva({
  history: createHistory(),
  onError(e) {
    message.error(e.message, 3)
  },
  onAction: createLogger()
})

app.use(createLoading())

// app.model(require('./pages/users/model').default)

app.router(App)

app.start('#root')

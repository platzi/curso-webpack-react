import ReactDom from 'react-dom'
import App from './components/App'
import config from './config'
console.log(config.API)

ReactDom.render(<App />, document.getElementById('app'))

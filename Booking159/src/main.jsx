import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './app/styles/global.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error("Корневой элемент с id 'root' не найден в DOM")
}

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
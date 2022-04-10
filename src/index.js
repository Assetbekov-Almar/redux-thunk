import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import App from './components/App'
import {Provider} from "react-redux";
import store from "./infrastructure/redux/store";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
</Provider>
)

const container = document.getElementById('root')
const root = createRoot(container)
root.render(app)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ConfigProvider,theme } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider theme={{
    /*token: {
      colorPrimary: '#32A852',
      colorInfo: '#32A852',
      colorLink: '#32A852',
      borderRadius: '10px',
      colorError: '#E53935',
      colorSuccess: '#32A852',
      colorTextBase: '#333333',
      colorWarning: '#FFA726',
      fontFamily: 'Nunito, sans-serif'
    }*/
    token: {
      // A slightly brighter green for primary color
      colorPrimary: '#2BBF4E',
    
      // An orangey-red for the error color
      colorError: '#E64A19',
    
      // Retaining other colors
      colorInfo: '#2496C1',
      colorLink: '#2AA8D8',
      colorSuccess: '#50C878',
      colorTextBase: '#333333',
      colorWarning: '#FF9800',
      borderRadius: '10px',
      fontFamily: 'Roboto, Nunito, sans-serif',
      
      // Box shadow that provides a bit of depth (outset)
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)' // this doesn't work, apply via style={{boxShadow: ...}}
    }
    
    
    
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>

)


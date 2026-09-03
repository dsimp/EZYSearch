import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          backgroundColor: '#0a0a0a',
          color: '#EAEAE6',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          fontFamily: 'monospace',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>EZY.INFRA // APP RECOVERY</h2>
          <p style={{ color: '#888888', fontSize: '13px', maxWidth: '400px', marginBottom: '24px' }}>
            A rendering error occurred on this device. Click below to reload.
          </p>
          <pre style={{ background: '#181818', padding: '12px', fontSize: '11px', color: '#00FF66', maxWidth: '90%', overflow: 'auto', marginBottom: '20px' }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: '#EAEAE6',
              color: '#000000',
              padding: '12px 24px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            RELOAD APPLICATION
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);

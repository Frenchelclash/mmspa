import './App.css';

import React, {useState} from 'react';

function App() {
  const [auth, setAuth] = useState(false);
  const [account, setAccount] = useState('');

  async  function handleConnectButton() {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      await setAuth(true);
      await setAccount(accounts[0])
    } else {
      alert("MetaMask is not installed")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        MetaMask Login
      </header>
      <body className="App-body">
        {!auth && <button className="connect-button" onClick={handleConnectButton}>Connect to MetaMask</button>}

        {auth && <div> <p>You are connected!</p><span>Account: {account} </span> </div>}
      </body>
    </div>
  );
}

export default App;

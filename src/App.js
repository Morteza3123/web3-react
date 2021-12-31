import {React, useState, useEffect} from 'react'
import { useWeb3React } from "@web3-react/core"
import { injected, walletconnect, bscConnector} from './components/connectors'
import { abi, contractAddress} from './components/abi'


function App() {
  useEffect(() => {
    injected.isAuthorized().then(res =>{ 
      if(res == true){
        console.log(res)
        activate(injected)
      }
    }
    )
  })
    

  const { active, account, library, connector, activate, deactivate, chainId } = useWeb3React()
  // const contract = new library.eth.Contract(abi, contractAddress)
  
  const [value, setValue] = useState("");
  const [word, setWord] = useState("");


  async function connect() {
    try {
      await activate(bscConnector)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate(injected)
      
    } catch (ex) {
      console.log(ex)
    }
  }

const setName = async () => {
  const contract = new library.eth.Contract(abi, contractAddress)
  await contract.methods.setName(value).send({from : account})
}

const showName = async () => {
  const contract = new library.eth.Contract(abi, contractAddress)
  const name = await contract.methods.showName().call()
  setWord(name)
}

  return (
    <div className="">
      <button onClick={connect}>Connect to MetaMask</button>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
      <button onClick={disconnect}>Disconnect</button><br/><br/>
      <input
        onChange={e => setValue(e.target.value)}
      /><h3>{word}</h3>
      <br/>
      <button onClick={setName}>setName</button>
      <button onClick={showName}>showName</button>
      
    </div>
  );
}

export default App;

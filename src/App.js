import {React, useState, useEffect} from 'react'
import { useWeb3React } from "@web3-react/core"
import { injected, walletconnect, bscConnector} from './components/connectors'
import { abi, contractAddress} from './components/abi'
import Navbar from './components/Navbar'
import Wallets from './components/Wallets'
import Web3 from 'web3'
import './App.css'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    injected.isAuthorized().then(res =>{ 
      if(res == true){
        // console.log(res)
        // activate(injected)
      }
    })

    // bscConnector.isAuthorized().then(res =>{ 
    //   if(res == true){
    //     console.log(res)
    //     activate(bscConnector)
    //   }
    // })

    // walletconnect.isAuthorized().then(res =>{ 
    //   if(res == true){
    //     console.log(res)
    //     activate(walletconnect)
    //   }
    // })
   })
    

  const { active, account, library, connector, activate, deactivate, chainId } = useWeb3React()
  // const contract = new library.eth.Contract(abi, contractAddress)
  
  const [value, setValue] = useState("");
  const [word, setWord] = useState("");


  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
      
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
    <>
    <div>
      <Navbar />
      <div className='container-fluid'>
      <div className="p-5 col d-flex justify-content-center">
        

        <form class="row g-3 card bg-info">
         <div class="col-auto">
           {/* <label for="staticEmail2" class="visually-hidden">Email</label> */}
           {/* <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"/> */}
         </div>
         <div class="col-auto">
           <p className='text-center'>{word}</p>
 
           <input 
           type="text" 
          //  value={this.state.name2} 
           onChange={e=>setValue(e.target.value)}
           class="form-control" 
           id="inputPassword2" 
           placeholder="name"
           />
 
         </div>
         <div class="row-auto">
           <button type="button" onClick={()=>setName()} class="col btn btn-secondary mb-3">SetName</button>
            <button type="button" onClick={()=>showName()} class="col btn btn-success mb-3">ShowName</button>
         </div>
       </form>
         
 
       </div>
   
    </div>
    </div>
     {/* <Footer/> */}
     </>
  );
}

export default App;

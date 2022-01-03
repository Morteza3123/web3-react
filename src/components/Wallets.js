import {React, useState, useEffect} from 'react'
import { Button, Modal,  } from 'react-bootstrap';
import matamask from '../assets/metamask.png'
import binanceimg from '../assets/binance.png'
import walletconnectimg from '../assets/walletconnect.svg'
import ledgerimage from '../assets/ledger.png'
import { injected, walletconnect, bscConnector, ledger} from './connectors'
import { useWeb3React } from "@web3-react/core"
import Web3 from 'web3';


function Wallets() {
  const { active, account, library, connector, activate, deactivate, chainId } = useWeb3React()


    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    useEffect(() => {
      
    },[])

    async function connect(event) {
      try {
        await activate(event)
        setSmShow(false)
      } catch (ex) {
        console.log(ex)
      }
    }
    
    async function disConnect() {
      try {
        await deactivate()
      } catch (ex) {
        console.log(ex)
      }
    }
  
    return (
      <>
        {active ? <p className='text-dark card bg-warning mt-3 p-2'>{account}</p> : null}
        {active ? <button className='btn btn-danger p-2' onClick={()=>disConnect()}>Disconnect</button> : <Button onClick={() => setSmShow(true)}>Connect</Button>}
  
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <div className='container-fluid'>
                <div onClick={()=>connect(injected)} className='row'>
                  <button className='row btn-light border-radios'>
                  <h className='col'>MetaMask</h>
                  <img className='col' src={matamask} style={{maxHeight:'70px',maxWidth:'70px',height:'auto',width:'auto'}}/>
                  </button>
                </div>
                <div className='row'>
                  <button onClick={()=>connect(bscConnector)} className='row btn-light'>
                  <h className='col'>Binance Wallet</h>
                  <img className='col' src={binanceimg} style={{maxHeight:'70px',maxWidth:'70px',height:'auto',width:'auto'}}/>
                  </button>
                </div>
                <div className='row'>
                  <button onClick={()=>connect(walletconnect)} className='row btn-light'>
                  <h className='col'>Wallet Connect</h>
                  <img className='col' src={walletconnectimg} style={{maxHeight:'70px',maxWidth:'70px',height:'auto',width:'auto'}}/>
                  </button>
                </div>
                <div className='row'>
                  <button onClick={()=>connect(ledger)} className='row btn-light'>
                  <h className='col'>Ledger</h>
                  <img className='col' src={ledgerimage} style={{maxHeight:'70px',maxWidth:'70px',height:'auto',width:'auto'}}/>
                  </button>
                </div>        
              </div>
            </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default Wallets;
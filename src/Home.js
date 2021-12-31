import { useWeb3React } from "@web3-react/core"
import { injected, walletconnect } from "./components/connectors"


function Home() {

    const { active, account, library, connector, activate, deactivate } = useWeb3React()
    
    async function connect() {
        try {
          await activate(walletconnect)
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

  return (
    <div className="App">
      <div className="container">
          <div className="p-5 row g-5 mx-auto ml-auto col-md text-center align-items-center">
          <button onClick={connect} className="btn btn-primary">Connect</button>
          {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
          <button onClick={disconnect} className="btn btn-primary">DisConnect</button>
          </div>
      </div>
    </div>
  );
}

export default Home;

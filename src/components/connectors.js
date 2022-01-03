import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector';
import { LedgerConnector } from '@web3-react/ledger-connector'

const POLLING_INTERVAL = 12000;
// const rpcUrl = getNodeUrl();
const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
})

export const walletconnect = new WalletConnectConnector({
    rpc: { 1 : 'https://mainnet.infura.io/v3/2d0906a37a5c4692aee4f70a2560fd4b' },
    qrcode: true,
    pollingInterval: POLLING_INTERVAL
  });

 export const bscConnector = new BscConnector({ supportedChainIds: [1, 3, 4, 5, 42, 56, 97] });

 export const ledger = new LedgerConnector({ 
   chainId: 1, 
   url: 'https://mainnet.infura.io/v3/2d0906a37a5c4692aee4f70a2560fd4b', 
   pollingInterval: POLLING_INTERVAL })

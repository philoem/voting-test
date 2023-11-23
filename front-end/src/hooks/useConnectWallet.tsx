import { useState } from 'react'

const { ethereum } = window
export default function useConnectWallet() {
  const [voter, setVoter] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  
  const connectingWallet = async () => {
    try {
      if (!ethereum) {
        alert('Get MetaMask!')
        return
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      console.log('Connected', accounts[0])
      setVoter(accounts[0])
      setIsConnected(true)
    } catch (error) {
      console.log(error)
    }    
  }
  

  return { isConnected, ethereum, connectingWallet }
}
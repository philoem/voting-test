import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isVoted, setIsVoted] = useState(false)
  const [voter, setVoter] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [nbrOfStarWArs, setNbrOfStarWArs] = useState(0)
  const [nbrStarTrek, setNbrStarTrek] = useState(0)
  const [responseVoter, setResponseVoter] = useState('')

  useEffect(() => {
    isConnected === false ? console.log('Votant non connecté à son wallet') : console.log('Votant connecté à son wallet')
    isVoted === true ? console.log('voter is already voted') : console.log('voter is not yet voted')
  }, [isConnected, isVoted])
  

  const connectWallet = async () => {
    try {
      const { ethereum } = window
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

  const starWarsVote = async () => {
    setNbrOfStarWArs(nbrOfStarWArs + 1)
    setIsVoted(true)
    setResponseVoter('Star Wars')
  }

  const starTrekVote = async () => {
    setNbrStarTrek(nbrStarTrek + 1)
    setIsVoted(true)
    setResponseVoter('Star Trek')
  }

  return (
    <>
      <h1>Simply Vote</h1>
      {!isConnected && (        
        <div className="card">
          <button onClick={() => connectWallet()}>
            Connect your wallet
          </button>
          <p>
            Enjoy !
          </p>
        </div>
      )}
      {isConnected && (
        <>
          <p className="read-the-docs">
            Which do you prefer between :
          </p>
          <button onClick={() => starWarsVote()} disabled={isVoted}>
            Star Wars
          </button>
          <button onClick={() => starTrekVote()} disabled={isVoted}>
            Star Trek
          </button>
          {isVoted && (
            <>
              <p>
                Thank you for voting !
              </p>
              <p>
                {voter}
              </p>
              <p>
                Star Wars : {nbrOfStarWArs}
              </p>
              <p>
                Star Trek : {nbrStarTrek}
              </p>
              <p>
                {responseVoter}
              </p>
            </>
          )}
        </>
      )} 
    </>
  )
}

export default App

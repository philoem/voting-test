import { useEffect, useState, useId } from 'react'
import './App.css'

const cutStringAfterSecondSpace = (str: string) => {
  const words = str.split(' ');
  if (words.length > 2) {
    return words.slice(0, 2).join(' ');
  }
  return str;
}

function App() {
  const id = useId()
  const [isVoted, setIsVoted] = useState(false)
  const [voter, setVoter] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [nbrOfStarWArs, setNbrOfStarWArs] = useState(0)
  const [nbrStarTrek, setNbrStarTrek] = useState(0)
  const [responseVoter, setResponseVoter] = useState('')
  // Countdown
  const [count, setCount] = useState(10);
  const [theWinnerIs, setTheWinnerIs] = useState('')
  const [isCountdownActive, setIsCountdownActive] = useState(false)

  useEffect(() => {
    isConnected === false ? console.log('Votant non connecté à son wallet') : console.log('Votant connecté à son wallet')
    isVoted === true ? console.log('voter is already voted') : console.log('voter is not yet voted')
  }, [isConnected, isVoted])

  // Countdown simulated to display winner
  useEffect(() => {
    if (isCountdownActive && count === 0) {
      setTheWinnerIs(`The winner is    :    ${cutStringAfterSecondSpace(responseVoter)}`)
      return;
    }
    if(isCountdownActive) {

      const interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1)
      }, 1000)
      
      return () => {
        clearInterval(interval)
      }
    }
  }, [count, isCountdownActive, responseVoter])

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
    setResponseVoter(`Star Wars ${id}`)
    setIsCountdownActive(true)
  }

  const starTrekVote = async () => {
    setNbrStarTrek(nbrStarTrek + 1)
    setIsVoted(true)
    setResponseVoter(`Star Trek ${id}`)
    setIsCountdownActive(true)
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
              {count !== 0 && (
                <>
                  <p>
                    The result of the vote is coming soon
                  </p> 
                  <div className="card-countdown">
                    <div className="dot-elastic"></div>
                  </div>
                </>
              )}
              {count === 0 && (
                <h2 className={`${nbrOfStarWArs > nbrStarTrek ? 'font-winner-star-wars' : 'font-winner-star-trek'}`}>
                  {theWinnerIs}
                </h2>
              )}              
            </>
          )}
        </>
      )} 
    </>
  )
}

export default App

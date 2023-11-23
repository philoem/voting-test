import { useEffect, useState, useId } from 'react'
import './App.css'
import useConnectWallet from './hooks/useConnectWallet'
import useCutStringAfterSecondSpace from './hooks/useCutStringAfterSecondSpace'
// import Contract from '../../artifacts/contracts/Voting.sol/Voting.json'
import { ethers } from "ethers";

function App() {
  const id = useId()
  const { isConnected, ethereum, connectingWallet } = useConnectWallet()
  const [responseVoter, setResponseVoter] = useState('')
  const cutStringAfterSecondSpace = useCutStringAfterSecondSpace(responseVoter)

  const [isVoted, setIsVoted] = useState(false)
  const [nbrOfStarWArs, setNbrOfStarWArs] = useState(0)
  const [nbrStarTrek, setNbrStarTrek] = useState(0)
  // Countdown
  const [count, setCount] = useState(10);
  const [theWinnerIs, setTheWinnerIs] = useState('')
  const [isCountdownActive, setIsCountdownActive] = useState(false)

  // Interact with smart contract and after move them to custom hooks
  // const { ethereum } = window
  if (ethereum) {
    const provider = new ethers.BrowserProvider(ethereum)
    console.log('provider :>> ', provider);
  } else {
    console.log('ethereum is not defined');
  }

  useEffect(() => {
    isConnected === false ? console.log('Votant non connecté à son wallet') : console.log('Votant connecté à son wallet')
    isVoted === true ? console.log('voter is already voted') : console.log('voter is not yet voted')
  }, [isConnected, isVoted])

  // Countdown simulated to display winner
  useEffect(() => {
    if (isCountdownActive && count === 0) {
      setTheWinnerIs(`The winner is    :    ${cutStringAfterSecondSpace}`)
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
  }, [count, cutStringAfterSecondSpace, isCountdownActive, responseVoter])

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
          <button onClick={() => connectingWallet()}>
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
          <button id='star-wars' onClick={() => starWarsVote()} disabled={isVoted}>
            Star Wars
          </button>
          <button id='star-trek' onClick={() => starTrekVote()} disabled={isVoted}>
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

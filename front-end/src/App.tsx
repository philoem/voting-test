import { useEffect, useState, useId } from 'react'
import './App.css'
import useConnectWallet from './hooks/useConnectWallet'
import useCutStringAfterSecondSpace from './hooks/useCutStringAfterSecondSpace'
import useCountDownSimulated from './hooks/useCountDownSimulated'
import Contract from '../../artifacts/contracts/Voting.sol/Voting.json'
import { ethers } from "ethers";

function App() {
  const id = useId()
  const { isConnected, ethereum, connectingWallet } = useConnectWallet()
  const [responseVoter, setResponseVoter] = useState('')
  const cutStringAfterSecondSpace = useCutStringAfterSecondSpace(responseVoter)
  const { count, theWinnerIs, setIsCountdownActive } = useCountDownSimulated(cutStringAfterSecondSpace)

  const [isVoted, setIsVoted] = useState(false)
  const [nbrOfStarWArs, setNbrOfStarWArs] = useState(0)
  const [nbrStarTrek, setNbrStarTrek] = useState(0)

  useEffect(() => {
    isConnected === false ? console.log('Votant non connecté à son wallet') : console.log('Votant connecté à son wallet')
    isVoted === true ? console.log('voter is already voted') : console.log('voter is not yet voted')
  }, [isConnected, isVoted])

  const hasVoted = async (choice: string) => {
    console.log('choice :>> ', choice);
    let signer;
    let contract;
    let voted;
    if (ethereum) {
      const provider = new ethers.BrowserProvider(ethereum)
      signer = await provider.getSigner()
      const abi = Contract.abi
      contract = new ethers.Contract(signer.address, abi, signer)
      await contract.vote({
        gasLimit: 300000,
        gasPrice: ethers.parseUnits('100', 'gwei'),
      })
      voted = await contract.vote('Star Wars', {
        gasLimit: 300000,
        gasPrice: ethers.parseUnits('100', 'gwei'),
      })

    } else {
      console.log('ethereum is not defined');
    }
    switch(choice) {
      case 'choiceOne':
        console.log('contract :>> ', contract);
        console.log('signer?.address :>> ', signer?.address);
        console.log('voted :>> ', voted);
        // voted = await contract.vote('Star Wars', {
        //   gasLimit: 300000,
        //   gasPrice: ethers.parseUnits('100', 'gwei'),
        // })
        setNbrOfStarWArs(nbrOfStarWArs + 1)
        setIsVoted(true)
        setResponseVoter(`Star Wars ${id}`)
        setIsCountdownActive(true)
        break
      case 'choiceTwo':
        setNbrStarTrek(nbrStarTrek + 1)
        setIsVoted(true)
        setResponseVoter(`Star Trek ${id}`)
        setIsCountdownActive(true)
        break
    }
    
  }

  const reloadPage = () => {
    window.location.reload();
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
          <button id='star-wars' onClick={() => hasVoted('choiceOne')} disabled={isVoted}>
            Star Wars
          </button>
          <button id='star-trek' onClick={() => hasVoted('choiceTwo')} disabled={isVoted}>
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
                <>
                <button className='reload' onClick={() => reloadPage()}>
                  Go to new vote
                </button>
                <h2 className={`${nbrOfStarWArs > nbrStarTrek ? 'font-winner-star-wars' : 'font-winner-star-trek'}`}>
                  {theWinnerIs}
                </h2>
                </>
              )}              
            </>
          )}
        </>
      )} 
    </>
  )
}

export default App
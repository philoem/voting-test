import { useEffect, useState, useId } from 'react'
import './App.css'
import useConnectWallet from './hooks/useConnectWallet'
import useCutStringAfterSecondSpace from './hooks/useCutStringAfterSecondSpace'
import useCountDownSimulated from './hooks/useCountDownSimulated'
import Contract from '../../artifacts/contracts/Voting.sol/Voting.json'
import Toast from './components/Toast/index'
import Button from './components/Button/index'
import Header from './components/Header'
import Form from './Form'
import { ethers } from 'ethers'

function App() {
	const id = useId()
	const { isConnected, ethereum, voter, connectingWallet } = useConnectWallet()
	const [responseVoter, setResponseVoter] = useState('')
	const cutStringAfterSecondSpace = useCutStringAfterSecondSpace(responseVoter)
	const { count, theWinnerIs, setIsCountdownActive } =
		useCountDownSimulated(cutStringAfterSecondSpace)

	const [isVoted, setIsVoted] = useState(false)
	const [nbrOfStarWArs, setNbrOfStarWArs] = useState(0)
	const [nbrStarTrek, setNbrStarTrek] = useState(0)

	useEffect(() => {
		isConnected === false
			? console.log('Votant non connecté à son wallet')
			: console.log('Votant connecté à son wallet')
		isVoted === true ? console.log('voter is already voted') : console.log('voter is not yet voted')
	}, [isConnected, isVoted])

	/**
	 * Checks if a user has voted based on the given choice.
	 *
	 * @param {string} choice - The user's choice for voting.
	 * @return {Promise<void>} - A Promise that resolves to nothing.
	 */
	const hasVoted = async (choice: string): Promise<void> => {
		console.log('choice :>> ', choice)
		let signer
		let contract
		let voted
		if (ethereum) {
			const provider = new ethers.BrowserProvider(ethereum)
			signer = await provider.getSigner()
			const abi = Contract.abi
			contract = new ethers.Contract(signer.address, abi, signer)
			await contract.vote({
				gasLimit: 300000,
				gasPrice: ethers.parseUnits('100', 'gwei')
			})
			voted = await contract.vote('Star Wars', {
				gasLimit: 300000,
				gasPrice: ethers.parseUnits('100', 'gwei')
			})
		} else {
			console.log('ethereum is not defined')
		}
		switch (choice) {
			case 'choiceOne':
				console.log('contract :>> ', contract)
				console.log('signer?.address :>> ', signer?.address)
				console.log('voted :>> ', voted)
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
		window.location.reload()
	}

	return (
		<>
			<Header addressWallet={voter} isConnected={isConnected} />
			<h1>Simply Vote</h1>
			{!isConnected && (
				<div className='card'>
					<Button
						text='Connect your wallet'
						onClick={() => connectingWallet()}
						disabled={isVoted}
					/>
				</div>
			)}
			<Toast />
			{isConnected && (
				<>
					<p className='read-the-docs'>Which do you prefer between :</p>
					<Button text='Star Wars' onClick={() => hasVoted('choiceOne')} disabled={isVoted} />
					<Button text='Star Trek' onClick={() => hasVoted('choiceTwo')} disabled={isVoted} />
					<Form />
					{isVoted && (
						<>
							<p>Thank you for voting !</p>
							{count !== 0 && (
								<>
									<p>The result of the vote is coming soon</p>
									<div className='card-countdown'>
										<div className='dot-elastic'></div>
									</div>
								</>
							)}
							{count === 0 && (
								<>
									<Button text='Go to new vote' className='reload' onClick={() => reloadPage()} />
									<h2
										className={`${
											nbrOfStarWArs > nbrStarTrek
												? 'font-winner-star-wars'
												: 'font-winner-star-trek'
										}`}
									>
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

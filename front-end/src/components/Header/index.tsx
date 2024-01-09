import './index.css'

const Header = ({
	addressWallet,
	isConnected
}: { addressWallet: string; isConnected: boolean }) => {
	return (
		<>
			{isConnected && (
				<header className='header'>
					<div className='content-header'>
						<div className='text-header'>
							<p>Vous êtes actuellement connecté</p>
						</div>
						<div className='address-header'>
							{`${addressWallet?.substring(0, 8)}...${addressWallet?.substring(
								addressWallet.length - 3
							)}`}
						</div>
					</div>
				</header>
			)}
		</>
	)
}

export default Header

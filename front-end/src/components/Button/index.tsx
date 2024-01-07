import { useEffect, useState } from 'react'

type ButtonProps = {
	text: string
	onClick: () => void
	className?: string
	disabled?: boolean
}

const Button = ({ text, onClick, className, disabled }: ButtonProps) => {
	const [, setHover] = useState(false)

	useEffect(() => {
		setHover(false)
	}, [disabled])

	return (
		<button
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className={className}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

export default Button

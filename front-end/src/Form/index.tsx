import Button from '../components/Button'
import useMethodsForm from './hooks/useMethodsForm'
import './index.css'

/**
 * Renders a form component.
 *
 * @return {JSX.Element} The rendered form.
 */
const Form = (): JSX.Element => {
	const { inputFields, handleFormChange, addFields, submit, removeFields } = useMethodsForm()

	return (
		<>
			<form onSubmit={submit}>
				{inputFields.map((input, index) => {
					return (
						<div className='form' key={index}>
							<input
								className='form-input'
								name='name'
								placeholder='Name'
								value={input?.name}
								onChange={(event) => handleFormChange(index, event)}
							/>
							<input
								className='form-input'
								name='description'
								placeholder='Description'
								value={input?.description}
								onChange={(event) => handleFormChange(index, event)}
							/>
							<Button text='Remove' onClick={() => removeFields(index)} />
						</div>
					)
				})}
				<Button text='Add' onClick={() => addFields()} />
			</form>
			<Button text='Submit' onClick={() => submit()} />
		</>
	)
}

export default Form

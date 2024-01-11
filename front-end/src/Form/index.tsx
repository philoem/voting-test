import Button from '../components/Button'
import useMethodsForm from './hooks/useMethodsForm'
import './index.css'

/**
 * Renders a form component.
 *
 * @return {JSX.Element} The rendered form.
 */
const Form = (): JSX.Element => {
	const { inputFields, handleFormChange, addingFields, submit, removeFields, resetForm, checkIfEmpty } = useMethodsForm()

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
							<Button className='button-form' text='Remove' onClick={() => removeFields(index)} />
						</div>
					)
				})}
			</form>
			<Button className='button-form' text='Add' onClick={() => addingFields()} />
			<Button className='button-form' text='Submit' onClick={(e: React.FormEvent<HTMLFormElement>) => submit(e)} disabled={checkIfEmpty(inputFields)} />
			<Button className='button-form' text='Reset' onClick={() => resetForm()} />
		</>
	)
}

export default Form

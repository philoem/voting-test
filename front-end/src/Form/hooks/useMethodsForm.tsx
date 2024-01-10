import { useState, ChangeEvent } from 'react'

interface MethodsForm {
	inputFields: { name: string; description: string }[]
	handleFormChange: (index: number, event: ChangeEvent<HTMLInputElement>) => void
	addingFields: () => { name: string; description: string }[]
	submit: () => void
	removeFields: (index: number) => void
}

/**
 * Returns an object containing the state and functions for managing a dynamic form with input fields.
 *
 * @return {Object} An object with the following properties:
 *   - inputFields: An array of objects representing the input fields, each with a name and description.
 *   - handleFormChange: A function that updates the values of the input fields based on user input.
 *   - addingFields: A function that adds a new input field to the form.
 *   - submit: A function that logs the current state of the input fields.
 *   - removeFields: A function that removes an input field from the form.
 */
const useMethodsForm = (): MethodsForm => {
	const [inputFields, setInputFields] = useState([{ name: '', description: '' }])

	/**
	 * Updates the input fields array with the new values at the specified index.
	 *
	 * @param {number} index - The index of the element to update in the inputFields array.
	 * @param {ChangeEvent<HTMLInputElement>} event - The event object containing the updated input value.
	 * @return {void}
	 */
	const handleFormChange = (index: number, event: ChangeEvent<HTMLInputElement>): void => {
		const values: { name: string; description: string }[] = [...inputFields]
		if (event.target.name === 'name') {
			values[index].name = event.target.value
		} else if (event.target.name === 'description') {
			values[index].description = event.target.value
		}
		setInputFields(values)
	}

	/**
	 * Adds a new field to the input fields array.
	 *
	 * @return {array}
	 */
	const addingFields = (): { name: string; description: string; }[] => {
		const newField = { name: '', description: '' }
		setInputFields([...inputFields, newField])
		return inputFields
	}

	/**
	 * Executes the submit action.
	 *
	 * @return {void} No return value
	 */
	const submit = (): void => {
		console.log(inputFields)
	}

	/**
	 * Removes a field from the input fields array based on the provided index.
	 *
	 * @param {number} index - The index of the field to be removed.
	 * @return {void} This function does not return a value.
	 */
	const removeFields = (index: number): void => {
		const values = [...inputFields]
		values.splice(index, 1)
		setInputFields(values)
	}

	return {
		inputFields,
		handleFormChange,
		addingFields,
		submit,
		removeFields
	}
}

export default useMethodsForm

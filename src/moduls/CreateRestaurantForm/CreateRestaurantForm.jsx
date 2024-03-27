import React from 'react'
import Form from './components/Form'
import Button from "../../ui/Button/Button"

const CreateRestaurantForm = () => {
	return (
		<div className='flex flex-col gap-[30px] w-1/2'>
			<Form/>
			<Button text='Создать' className={"mx-auto"}/>
		</div>
	)
}

export default CreateRestaurantForm

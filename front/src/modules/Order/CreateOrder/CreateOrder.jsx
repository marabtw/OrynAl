import { useState } from 'react'
import SelectMenu from './components/SelectMenu/SelectMenu'
import TableReservation from './components/TableReservation/TableReservation'

const CreateOrder = ({restaurantId}) => {
	const [order, setOrder] = useState()

	
	return (
		<div className='py-[100px]'>
			<TableReservation restaurantId={restaurantId}/>
			<SelectMenu restaurantId={restaurantId}/>
		</div>
	)
}

export default CreateOrder

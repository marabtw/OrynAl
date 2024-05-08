import SelectMenu from './components/SelectMenu/SelectMenu'
import TableReservation from './components/TableReservation/TableReservation'

const CreateOrder = () => {
	return (
		<div className='py-[100px]'>
			<TableReservation/>
			<SelectMenu/>
		</div>
	)
}

export default CreateOrder

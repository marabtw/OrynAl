import React from 'react'
import ChooseTime from './components/ChooseTime/ChooseTime'
import SelectTable from './components/SelectTable/SelectTable'
import SelectMenu from './components/SelectMenu/SelectMenu'

const Booking = () => {
	return (
		<div className='py-[100px]'>
			<ChooseTime/>
			<SelectTable/>
			<SelectMenu/>
		</div>
	)
}

export default Booking

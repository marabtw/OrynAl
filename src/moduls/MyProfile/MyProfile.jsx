import React from 'react'
import AccoutInfo from './components/AccoutInfo'
import UpdateAccoutForm from './components/UpdateAccoutForm'

const MyProfile = () => {
	return (
		<div className='flex justify-between gap-[30px] px-[40px] py-[60px] bg-white rounded-[10px] max-md:flex-col max-lg:py-[30px] max-lg:px-[10px]'>
			<AccoutInfo/>
			<UpdateAccoutForm/>
		</div>
	)
}

export default MyProfile

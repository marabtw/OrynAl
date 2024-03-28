import React from 'react'
import MyRestaurantsCards from '../moduls/MyRestaurantsCards/MyRestaurantsCards'

const MyRestaurantsPage = () => {
	return (
		<div className='p-[50px]'>
			<h1 className='text-[32px] font-[700] leading-[48px]'>Мои рестораны</h1>
			<MyRestaurantsCards/>
		</div>
	)
}

export default MyRestaurantsPage
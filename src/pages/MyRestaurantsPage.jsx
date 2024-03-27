import React from 'react'
import MyRestaurantsList from '../moduls/MyRestaurantsList/MyRestaurantsList'

const MyRestaurantsPage = () => {
	return (
		<div className='p-[50px]'>
			<h1 className='text-[32px] font-[700] leading-[48px]'>Мои рестораны</h1>
			<MyRestaurantsList/>
		</div>
	)
}

export default MyRestaurantsPage

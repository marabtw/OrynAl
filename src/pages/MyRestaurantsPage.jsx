import React from 'react'
import MyRestaurantsCards from '../moduls/MyRestaurantsCards/MyRestaurantsCards'
import PageHeading from '../ui/Heading/PageHeading'

const MyRestaurantsPage = () => {
	return (
		<div className='px-[70px] py-[50px]'>
			<PageHeading location={"Мои рестораны"}/>
			<MyRestaurantsCards/>
		</div>
	)
}

export default MyRestaurantsPage
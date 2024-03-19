import React from 'react'
import Main from '../../moduls/Main/Main'
import RestauransMain from '../../moduls/RestaurantsMain/RestaurantsMain'
import Footer from '../../moduls/Footer/Footer'

const Home = () => {
	return (
		<div className='overflow-hidden'>
			<Main/>
			<RestauransMain/>
			<Footer/>
		</div>
	)
}

export default Home

import { useState } from 'react'
import OwnersList from '../../moduls/OwnersList/OwnersList'
import CreateButton from '../../components/CreateButton/CreateButton'
import PageHeading from '../../ui/Heading/PageHeading'

const Owners = () => {
	const [data, setData] = useState([
    {
      id: "1235432sdfsd",
      name: "Батырбек",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
    {
      id: "1235432sdfsd",
      name: "Батырбек",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
    {
      id: "1235432sdfsd",
      name: "Батырбек",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
    {
      id: "1235432sdfsd",
      name: "Батырбек",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
  ])
	return (
		<div className='p-[60px]'>
			<div className='flex items-center gap-[20px] mb-[40px]'>
				<PageHeading text={"Владельцы"}/>
				<CreateButton to={"/my-restaurants/owners/create"}/>
			</div>
			<OwnersList data={data}/>
		</div>
	)
}

export default Owners

import { useState } from "react"
import { dataSiteStatistics } from "../../data/mainData"
import logo from "../../assets/images/logo.png"
import LinearGradientText from "../../ui/LinearGradientText/LinearGradienText"

const Footer = () => {
  const [statistics, setStatistics] = useState(dataSiteStatistics)

  return (
    <footer className="px-[30px] py-[100px] flex flex-col gap-[150px]">
      <div className="grid grid-cols-3 gap-[30px]">
        <div className="text-center">
					<LinearGradientText tag="h2" text={statistics.booking} from={"#6AA7FC"} to={"#3D6FFB"} className="text-[100px] font-[600] leading-[90px]"/>
          <p className="text-[25px] leading-[22.5px] mt-[10px]">Заявок на бронь столиков полученные от нас рестораны, кафе.</p>
        </div>
        <div className="text-center">
					<LinearGradientText tag="h2" text={statistics.people} from={"#6AA7FC"} to={"#3D6FFB"} className="text-[100px] font-[600] leading-[90px]"/>
          <p className="text-[25px] leading-[22.5px] mt-[10px]">Заявок на бронь столиков полученные от нас рестораны, кафе.</p>
        </div>
        <div className="text-center">
					<LinearGradientText tag="h2" text={statistics.establishments} from={"#6AA7FC"} to={"#3D6FFB"} className="text-[100px] font-[600] leading-[90px]"/>
          <p className="text-[25px] leading-[22.5px] mt-[10px]">Заявок на бронь столиков полученные от нас рестораны, кафе.</p>
        </div>
      </div>
			<div className="flex justify-between">
				<div className="flex items-center gap-[10px]">
					<img src={logo} alt="logo" className="h-[49px] bg-[#4476FB] rounded-full "/>
					<h5 className="text-[20px] font-[600 leading-[30px]">OrysAl - 2022</h5>
				</div>
				<div className="flex items-center gap-[40px] text-[20px] leading-[24px] text-[#969696] flex-wrap">
					<h5>О нас</h5>
					<h5>Контакты</h5>
					<h5>Стать портнером</h5>
					<h5>Мы в социальных сетях</h5>
				</div>
				<label htmlFor="footerInput" className="relative w-[585px]">
					<input id="footerInput" type="text" placeholder="Написать нам..." className="w-full px-[20px] py-[15px] border-[3px] border-[#C4C4C4] rounded-[10px]"/>
					<button className="absolute top-1/2 right-[10px] translate-y-[-50%] px-[20px] py-[10px] text-[15px] leading-[24px] text-white bg-[#66A2FC] rounded-[10px]">Отправить</button>
				</label>
			</div>
    </footer>
  )
}

export default Footer

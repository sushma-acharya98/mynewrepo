
import Image from 'next/image'

import Header from './header'
import SectionMain from './sectionMain'
import SectionChart from './sectionChart'
import SectionDiagram from './sectionDiagram'
import Review from './review'
// import "~slick-carousel/slick/slick.css";               //here
// import "~slick-carousel/slick/slick-theme.css"; 

const content = () => {
  return (
	<>
		<div className="body-container">
			<Header />
			<SectionMain />
			<SectionChart />
			<SectionDiagram />
			<Review />
			
		</div>
	</>
  )
}

export default content;
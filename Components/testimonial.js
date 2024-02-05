import Image from "next/image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


			
const testimonials = [

  {
	name: "Jons Sena",
	content: "2 days ago",
	image: "/images/jons.jpg",
	quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	image2: "/images/image4.png",
  },
  {
	name: "Sofia",
	content: "2 days ago",
	image: "/images/sofia.jpg",
	quote: "Vestibulum ut faucibus sem. Pellentesque rhoncus ipsum eget mi ultricies.",
	image2: "/images/image5.png",
  },
  {
	name: "Anandreansyah",
	content: "2 days ago",
	image: "/images/nan.png",
	quote: "Suspendisse ullamcorper, velit vitae bibendum tristique, velit elit interdum enim.",
	image2: "/images/image5.png",
  },
];

const TestimonialSlider = () => {
  const settings = {
	speed: 50,
	slidesToShow: 1,
	slidesToScroll: 1,
  };

  return (
	<>
		<div className="testimonial-section">
			<div className="review">
				<h1>Customer Review</h1>
				<p>Eum fuga consequuntur utadsjn et.</p>
			</div>
			<Slider {...settings}>
			{testimonials.map((testimonial, index) => (
				<div key={index}>
						<div className="slider-content">
							<div className="images">
								<div className="testimonial-img">
									<Image src={testimonial.image} alt="image" width={56} height={56} />
								</div>
								<div className="content">
									<span>{testimonial.name}</span>
									<p>{testimonial.content}</p>
								</div>
							</div>
							<p>{testimonial.quote}</p>
							<Image class="my-image" src={testimonial.image2} width={233} height={233} />
						</div>
				</div>
			))}
			</Slider>
		</div>
	</>
  );
};

export default TestimonialSlider;
		
				
		  
			

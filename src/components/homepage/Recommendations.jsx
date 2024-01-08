import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recommendations = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	return (
		<div className="w-full  bg-pink-300 h-80">
			<div className="w-3/4 m-auto">
				<div className="mt-20">
					<Slider {...settings}>
						{data.map((e) => (
							<div className="bg-white h-[450px] text-black rounded-xl">
								<div className="h-60 rounded-t-xl flex justify-center items-center">
									<img src={e.image} alt="" className="h-45 w-45" />
								</div>

								<div className="flex flex-col justify-center items-center gap-4 p-4">
									<p className="text-xl font-semibold">{e.name}</p>
									<p>{e.review}</p>
									<button className="bg-[#023047] text-white text-lg px-6 py-1 rounded-xl">
										Read More
									</button>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

const data = [
	{
		image: `/recomendation_images/c_one.webp`,
		name: `WiGL`,
		review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
	},
	{
		image: `/recomendation_images/c_two.webp`,
		name: `NERD Focus`,
		review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
	},
	{
		image: `/recomendation_images/c_three.webp`,
		name: `ACME AtronOmatic`,
		review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
	},
];

export default Recommendations;

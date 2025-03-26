import React from 'react';
import { Link } from 'react-router-dom';
import './styles.footer.css';

// import ESC_logo from '../../assets/img/esc-logo.png'
// import Facebook_icon from '../../assets/img/face-icon.png'
// import Instagram_icon from '../../assets/img/insta-icon.png'
// import Youtube_icon from '../../assets/img/youtube-icon.png'
import Location_icon from '../../assets/img/location-icon.png'
import Phone_icon from '../../assets/img/phone-icon.png'
import Mail_icon from '../../assets/img/mail-icon.png'
// import Visa_icon from '../../assets/img/visa-icon.png'
// import Bkash_icon from '../../assets/img/bkash-icon.png'
// import Paypal_icon from '../../assets/img/paypal-icon.png'
// import Nagad_icon from '../../assets/img/nagad-icon.png'
// import Master_icon from '../../assets/img/master-icon.png'

const data = [
	{
		category: { title: "Links", link: '' },
		sub: [
			{ title: "Services", link: "/services" },
			{ title: "About us", link: "/about" },
			// { title: "Privacy policy", link: "/" },
			// { title: "Term Of Use", link: "/" }
		]
	},
	// {
	// 	category: "Support",
	// 	sub: [
	// 		{ title: "FAQs", link: "/" },
	// 		{ title: "Tutorial videos", link: "/" },
	// 		{ title: "Warranty", link: "/" },
	// 		{ title: "Downloads", link: "/" },
	// 		{ title: "ESC blogs", link: "/about-us/community-dev" }
	// 	]
	// },
	// {
	// 	category: "Cooperation",
	// 	sub: [
	// 		{ title: "Become our Partners", link: "/about-us/community-dev" },
	// 		{ title: "Exhibitions", link: "/" }
	// 	]
	// },
	{
		category: { title: "Contact Us", link: '/contact' },
		sub: [
			{ title: "33 Washington Square W, New York United States of America", link: "/", icon: Location_icon },
			{ title: "+1 (316) 240-3351", link: "/", icon: Phone_icon },
			{ title: "brianaleksander23@gmail.com", link: "/", icon: Mail_icon }
		]
	}
];

function Footer() {
	return (
		<div className="footer">
			<div className='footer-main'>
				<div className='footer-social'>
					<div>
						{/* <img src={ESC_logo} alt='logo' /> */}
						<div className='footer-logo-web'>Brian Aleksander Service LLC</div>
					</div>
					<div className='footer-social-content'>Powering the Future with Brian Aleksander Service Limited liability company</div>
					<div className='footer-socials'>
						{/* <img src={Facebook_icon} alt='social' />
						<img src={Instagram_icon} alt='social' />
						<img src={Youtube_icon} alt='social' /> */}
					</div>
				</div>
				<div className='footer-links'>
					{data.map((section, index) => (
						<div className="footer-section" key={index}>
							<div className='footer-category'>
								<Link to={section.category.link}>
									{section.category.title}
								</Link>
							</div>
							<div className={
								section.sub.length > 3
									? 'footer-items-row'
									: (section.category.title === 'Contact Us' ? 'footer-items-row footer-items-col-left' : 'footer-items-row footer-items-col')
							}
							>
								{section.sub.map((item, subIndex) => (
									<div key={subIndex} className='footer-sub-category'>
										{section.category.title === 'Contact Us' ?
											<img src={item.icon} alt='icon' /> : null}
										<a href={item.link}>{item.title}</a>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='footer-copyright'>
				<div className='copyright'>© Copyright 2025 | All Rights Reserved.</div>
				{/* <div className='partners'>
					<img src={Visa_icon} alt='visa' />
					<img src={Bkash_icon} alt='bkash' />
					<img src={Paypal_icon} alt='paypal' />
					<img src={Nagad_icon} alt='nagad' />
					<img src={Master_icon} alt='master' />
				</div> */}
			</div>
		</div>
	);
}

export default Footer;

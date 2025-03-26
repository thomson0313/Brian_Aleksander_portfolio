import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.product.css';
import RouterBar from '../../components/routerBar';

import Review from '../../assets/img/review.png'
import Donwload from '../../assets/img/download.png'
import More_img from '../../assets/img/more-img.png'


function ProductDetails() {
	const location = useLocation();
	const params = location.state;

	console.log(params !== null);


	const [qty, setQty] = useState(1);

	const handleCount = (type) => {
		var i = qty;
		if (type === 'plus') {
			i++;
			setQty(i);
		} else if (i > 1) {
			i--;
			setQty(i);
		}
	}

	const routerData = [
		{ router: "Product", link: "/products" },
		{ router: "Product Details", link: `/product` }
	]

	return (
		<>
			{params !== null ?
				<div className="product-detail-container">
					<RouterBar router={routerData} />
					<div className='product-detail'>
						<div className='product-detail-img' data-aos='zoom-in'>
							<img src={params.img} alt='img' />
						</div>
						<div className='product-detail-data' data-aos='fade-down'>
							<div className='product-detail-name'>{params.name}</div>
							<div className='product-detail-star'>
								<img src={Review} alt='review' />
							</div>
							<div className='product-detail-sku'>Sku: <span>{params.sku}</span></div>
							{params.characters.map((character, index) => (
								<div key={index} className="feature-item">
									{character}
								</div>
							))}
							<div className='product-detail-capacity'>
								<div>Capacity</div>
								<div className='product-count-select'>
									<select
										name="Capacity"
									// value={value}
									// onChange={handleChange}
									>
										{
											params.capacities.map((item, index) => (
												<option key={index} value={item}>{item}</option>
											))
										}
									</select>
								</div>
							</div>
							<div className='product-detail-qty'>
								<div>Qty</div>
								<div className='product-qty-count'>
									<div onClick={() => handleCount('minus')}>-</div>
									<div>{qty}</div>
									<div onClick={() => handleCount('plus')}>+</div>
								</div>
							</div>
							<Link to='/contact'>
								<div className='product-detail-button'>Contact Us</div>
							</Link>
						</div>
					</div>
					<div className='product-detail-description'>
						<div className='product-description-title'>
							<div>Description</div>
						</div>
						<div className='product-item-value' data-aos='fade-down'>{params.description}</div>
					</div>
					<div className='product-detail-description'>
						<div className='product-specifications-title'>
							<div>Specifications</div>
							<a download href={params.specifications.pdf}>
								<img src={Donwload} alt='download' />
							</a>
						</div>
						{/* <div className='product-specifications-table'> */}
							<div className="table-container custom-scrollbar">
								<table>
									<tbody>
										{params.specifications.table.map((item, index) => (
											<tr key={index}>
												<td className="label">{item.label}</td>
												<td className="value">
													{item.value.split('\n').map((line, i) => (
														<div key={i}>{line}</div>
													))}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						{/* </div> */}
						<div className='product-specifications-img'>
							<img src={params.specifications.img} alt='img' data-aos='zoom-in' />
						</div>
					</div>
				</div> :
				<div className='product-detail-more'>
					<div className="products-banner">
						<div className="product-banner-sub aos-init aos-animate" data-aos="zoom-in">ESC Solid-State BATTERIES</div>
					</div>
					<div className='product-more-intro'>
						<img src={More_img} alt='more' />
						<div className='product-more-des'>
							<div className='product-more-title'>ESC Graphene Based Solid State Batteries</div>
							<div className='product-more-content'>
								Our standard energy storage modules feature a voltage range of 3VDC to 72VDC(or custom) and a capacity of up to 15,750 watt hours per unit.
								They support 50A - 200A charge/discharge currents (or custom), with a maximum pulse discharge up to 250A (or custom), depending on your needs.
								Operating from -20°C to 60°C, our batteries boast a lifespan of over 20 years and over 50,000 cycles.
								Compatible with all inverters such as Victron and SMA, they are engineered for long-lasting performance in parallel or series systems.
								Custom designed units with any voltage, amperage and KwH requirements are our specialty, as we customize our batteries for every application and customer.
								Just tell us your needs and we will build and install the battery or battery system that you need.
							</div>
						</div>
					</div>
				</div>
			}
		</>
	);
}

export default ProductDetails;

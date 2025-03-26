import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.product.css';
import RouterBar from '../../components/routerBar';
import { ProductCard } from './Card';

import { productsData } from '../../utils/data';

const routerData = [
	{ router: "Products", link: "/products" }
]


function Products() {

	const [flag, setFlag] = useState('rack')

	const handleFlag = (value) => {
		setFlag(value)
	}

	return (
		<div className="products-container">
			<RouterBar router={routerData} />
			<div className='products'>
				<div className='products-banner'>
					{/* <div className='product-banner-title' data-aos='zoom-in'>BEST</div> */}
					<div className='product-banner-sub' data-aos='zoom-in'>ESC Solid-State BATTERIES</div>
					{/* <div className='product-banner-sub orbitron-font' data-aos='zoom-in'>on the market</div> */}
				</div>
				<div className='products-section'>
					<div className='product-title' data-aos='fade-up'>Products</div>
					<div className='product-category-bar' data-aos='fade-up'>
						<div className='product-fetch'>
							<div className={flag === 'rack' ? 'product-fetch-button button-selected' : 'product-fetch-button'} onClick={() => handleFlag('rack')}>Rack Mount Configuration</div>
							<div className={flag === 'wall' ? 'product-fetch-button button-selected' : 'product-fetch-button'} onClick={() => handleFlag('wall')}>Wall Mount Configuration</div>
							<div className={flag === 'soon' ? 'product-fetch-button button-selected' : 'product-fetch-button'} onClick={() => handleFlag('soon')}>Coming Soon</div>
						</div>
					</div>
					<div className='product-cards'>
						{flag === 'rack' &&
							productsData.rack.items.map((item) => (
								<ProductCard props={item} />
							))
						}
						{flag === 'wall' &&
							productsData.wall.items.map((item) => (
								<ProductCard props={item} />
							))
						}
						{flag === 'soon' &&
							productsData.soon.items.map((item) => (
								<ProductCard props={item} btn={Object.keys(productsData)[2]} /*action={notify}*/ />
							))
						}
						{/* <ToastContainer
							position="top-center"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="light"
							// transition:Bounce
						/> */}
						{
							flag !== 'soon' &&
							<div className='product-card-more-container'>
								<div className='product-card-more'>
									<div className='product-card-more-title'>Custom Systems to Match Your Specification</div>
									<div className='product-card-more-content'>ESC does not up charge for custom configurations.</div>
									<Link to='/product/more'>
										<div className='product-more-button'>Read More</div>
									</Link>
								</div>
							</div>
						}
					</div>
					{flag === 'rack' &&
						<div>
							<div className='product-description-title'>
								<div>Description</div>
							</div>
							<div className='product-description-x' data-aos='fade-down'>{productsData.rack.description}</div>
						</div>
					}
					{flag === 'wall' &&
						<div>
							<div className='product-description-title'>
								<div>Description</div>
							</div>
							<div className='product-description-x' data-aos='fade-down'>{productsData.wall.description}</div>
						</div>
					}
				</div>
			</div>
		</div>
	);
}

export default Products;

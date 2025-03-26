import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Products from './pages/product';
import ProductDetails from './pages/product/ProductDetails';
import About from './pages/about';
import Community from './pages/about/Community';
import Contact from './pages/contact';
import Footer from './components/footer';
import NotFound from './pages/404';

import useDocumentTitle from './utils/useDocumentTitle';
import ScrollToTop from './utils/scrollToTop';


import AOS from "aos";
import './assets/styles/aos.css'

function App() {

	useDocumentTitle();

	useEffect(() => {
		AOS.init({
		  duration: 1200,
		  once: true,
		});
	  }, []);

	return (
		<div>
			<ScrollToTop />
			<Header />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products' element={<Products />} />
					<Route path='/product/:id' element={<ProductDetails />} />
					<Route path='/about' element={<About />} />
					<Route path='/services' element={<Community />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/*' element={<NotFound />} />
					<Route path='/product/undefined' element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;

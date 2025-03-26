import { Link } from 'react-router-dom'

import Like_icon from '../../assets/img/heart.png'

export const ProductCard = ({ props, btn, action }) => {
    return (
        <>
            {
                btn === 'soon' ?
                    <>
                        <div className="product-card" data-aos='flip-down' /*onClick={action}*/>
                            {/* <div className="product-like">
                                <img src={Like_icon} alt='like' />
                            </div> */}
                            <div className='product-img padding-0'>
                                <img src={props.img} alt='img' />
                            </div>
                            <div className='product-name margin-top-20'>{props.name}</div>
                            {/* <div className='product-button'>Coming Soon</div> */}
                        </div>
                    </>
                    :
                    <div className="product-card" data-aos='flip-down'>
                        <div className="product-like">
                            <img src={Like_icon} alt='like' />
                        </div>
                        <div className='product-img'>
                            <img src={props.img} alt='img' />
                        </div>
                        <div className='product-name'>{props.name}</div>
                        <div className='product-model'>{props.model}</div>
                        <Link to={`/product/${props.id}`} state={props}>
                            <div className='product-button'>View Product</div>
                        </Link>
                    </div>
            }
        </>
    )
}
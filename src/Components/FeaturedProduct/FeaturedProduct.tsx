import React from 'react';
import './FeaturedProduct.scss';

type product = {
    name: string
    id: number | string
    image: string
    additional_data: any
}

type FeaturedProductProps = {
    products?: Array<any>,
    id?: number
}

const FeaturedProduct: React.FC<FeaturedProductProps> = (props) => {
    const products: Array<any> | undefined = props?.products;
    return (
        <div className='featured-product-container'>
            <div className='featured-product-title'>
                Featured Products
            </div>
            <div className="featured-product-items">
                {products?.map(product => (<div className='featured-product-item'>
                    <div className='featured-product-name name'>{product.name}</div>
                    <div className='featured-product-brand brand'>{product?.brand}</div>
                    <img className='featured-product-image image' src={product.image} />
                </div>))}
            </div>
        </div>
    );
};

export default FeaturedProduct;

import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
	const params = useParams();

    return (
			<>
				<h1>Product Details!</h1>
				{/* productId refers to :productId in App.js */}
				<p>{params.productId}</p>
			</>
		);
};

export default ProductDetailPage;

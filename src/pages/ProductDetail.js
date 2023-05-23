import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetailPage = () => {
	const params = useParams();

    return (
			<>
				<h1>Product Details!</h1>
				{/* productId refers to :productId in App.js */}
            <p>{params.productId}</p>
            <p><Link to=".." relative='path'>Back</Link></p>
			</>
		);
};

export default ProductDetailPage;

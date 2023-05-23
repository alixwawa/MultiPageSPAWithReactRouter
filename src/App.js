import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    // absolute path
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
    children: [
      // these are relative paths because no forward slash / is at the beginning 
      // therefore these paths are appended to the end of the parent path
			{ path: '', element: <HomePage /> },
			{ path: 'products', element: <ProductsPage /> },
			{ path: 'products/:productId', element: <ProductDetailPage /> },
		],
	},
	,
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

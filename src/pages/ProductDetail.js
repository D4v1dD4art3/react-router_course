import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
  const params = useParams();
  console.log(params.productId);
  return (
    <div>
      <h1>The products Detail</h1>
      <p>{params.productId}</p>
    </div>
  );
};

export default ProductDetail;

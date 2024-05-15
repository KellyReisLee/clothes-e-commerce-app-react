
import { Link } from 'react-router-dom';
import './category-styles.styles.scss';

const CategoryItem = ({ category }) => {

  const { imageUrl, title } = category;
  return (
    <Link to={`/shop/${title}`}>
      <div className='category-container'>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
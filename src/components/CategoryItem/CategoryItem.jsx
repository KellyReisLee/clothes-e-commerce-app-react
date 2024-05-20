
import { Link } from 'react-router-dom';
import './category-styles.styles.jsx';
import {BackgroundImage, Body, ContainerCategory} from './category-styles.styles.jsx'

const CategoryItem = ({ category }) => {

  const { imageUrl, title } = category;
  return (
    <Link to={`/shop/${title}`}>
      <ContainerCategory>
        <BackgroundImage
          className='background-image'
          imageUrl={imageUrl}
        />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </ContainerCategory>
    </Link>
  );
};

export default CategoryItem;
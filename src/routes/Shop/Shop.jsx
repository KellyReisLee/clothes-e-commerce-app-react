import "./shop.styles.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/category-selector";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesError,
} from "../../store/categories/category-selector";
import Spinner from "../../components/Spinner/Spinner";

const Shop = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const error = useSelector(selectCategoriesError);
  console.log(error);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <div key={title} className="categories-main">
          {error.message && <p className="error">{error.message}</p>}
          <Link to={`/shop/${title}`}>{title.toUpperCase()}</Link>

          <div className="categories-container">
            {isLoading ? (
              <Spinner />
            ) : (
              categoriesMap[title]
                .slice(0, 4)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Shop;

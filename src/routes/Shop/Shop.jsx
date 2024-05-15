import { useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import './shop.styles.scss'
import ProductCard from '../../components/ProductCard/ProductCard'
import { Link } from 'react-router-dom'
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  //console.log(Object.keys(categoriesMap['hats']));

  return (
    <>
      {
        Object.keys(categoriesMap).map((title) => (
          <div key={title} className='categories-main'>
            <Link to={`/shop/${title}`}>
              {title.toUpperCase()}
            </Link>
            <div className='categories-container'>
              {
                categoriesMap[title].slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              }
            </div>
          </div>
        ))
      }

    </>
  )
}

export default Shop

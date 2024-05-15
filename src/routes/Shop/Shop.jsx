import { useContext } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import './shop.styles.scss'
import ProductCard from '../../components/ProductCard/ProductCard'
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  console.log(Object.keys(categoriesMap));

  return (
    <>
      {
        Object.keys(categoriesMap).map((title) => (

          <div key={title} className='categories-main'>
            <h1>{title.toUpperCase()}</h1>
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

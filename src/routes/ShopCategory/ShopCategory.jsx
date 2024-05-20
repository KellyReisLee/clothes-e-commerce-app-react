import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../context/CategoriesContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import './shop-category.styles.scss'

const ShopCategory = () => {

  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  

  return (
    <div className='categories-main-category'>
      <h1>{category.toUpperCase()}</h1>
      <div className='categories-container-category'>

        {
          categoriesMap[category]?.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        }
      </div>
    </div>
  )
}

export default ShopCategory

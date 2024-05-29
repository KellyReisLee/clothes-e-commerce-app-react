import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import './shop-category.styles.scss'
import {selectCategoriesMap} from '../../store/categories/category-selector'
import { useSelector } from 'react-redux'

const ShopCategory = () => {

  const { category } = useParams()
  const categoriesMap= useSelector(selectCategoriesMap)  
  

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

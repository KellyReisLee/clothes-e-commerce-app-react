import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import './category-products.styles.scss'
import {DATA_SHOP_1 as data} from '../../shop-data1'
import { useSelector } from 'react-redux'
import { selectCategoriesIsLoading, selectCategoriesError, selectCategories } from '../../store/categories/category-selector'
import Spinner from '../../components/Spinner/Spinner'

const CategoryProducts = () => {
  const isLoading = useSelector(selectCategoriesIsLoading)
  console.log(isLoading)
 
  
  
  return (
    <>
  
    <div className='categories-container'>

      {
        isLoading ? <Spinner/>: (
          data.map((category) => (
            <CategoryItem key={category.id} category={category} />
  
          ))
        )
      }


    </div>
    </>
  )
}

export default CategoryProducts
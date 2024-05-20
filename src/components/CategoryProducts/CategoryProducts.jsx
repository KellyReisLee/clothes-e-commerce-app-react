import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import './category-products.styles.scss'
import {DATA_SHOP_1 as data} from '../../shop-data1'

const CategoryProducts = () => {

  return (
    <div className='categories-container'>
      {
        data.map((category) => (
          <CategoryItem key={category.id} category={category} />

        ))
      }


    </div>
  )
}

export default CategoryProducts
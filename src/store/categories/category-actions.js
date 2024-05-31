import { CATEGORIES_ACTION_TYPES } from './category-types';
import { createAction } from '../../utils/reducer.utils';
import { getCategoriesAndDoc } from '../../utils/firebase';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)


export const fetchCategoriesAsync = () => async (dispatch, getState) => {

  //getState() -> da acesso a todo o state
  //const state = getState();
  //console.log(state)
  dispatch(fetchCategoriesStart())
  try {
    const categoriesMap = await getCategoriesAndDoc('categories');
    dispatch(fetchCategoriesSuccess(categoriesMap))
  } catch (error) {
    dispatch(fetchCategoriesFailed(error))
  }

}

// export const createAction = (type, payload) => ({ type, payload });
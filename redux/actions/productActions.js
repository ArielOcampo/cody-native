import axios from 'axios';


const productActions = {
    getProducts: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://cody-coffe-api.herokuapp.com/api/products')
            dispatch({ type: "GETPRODUCTS", payload: res.data.response.products })
            dispatch({ type: "GETSTOCK", payload: res.data.response.products })
        }
    },
    getOneProduct: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(``)
            dispatch({ type: 'GETONEPRODUCT', payload: res.data.response })
        }
    },

    filterProduct: (input) => {
        return async (dispatch, getState) => {
            dispatch({ type: "FILTERPRODUCTS", payload: input })
        }
    },

    getProductsbyCategory: (category) => {
        return async (dispatch, getState) => {
            const res = dispatch({ type: 'GETPRODUCTSBYCATEGORY', payload: category }
            )
        }
    },
    addToCart: (id) => {
        return async (dispatch, getState) => {
            dispatch({ type: "ADD_TO_CART", payload: id })
        }
    },
    delFromCart: (id, all = false) => {
        return async (dispatch, getState) => {
            if (all) {
                dispatch({ type: 'DELETE_ALL_FROM_CART', payload: id })
            }
            else {
                dispatch({ type: 'DELETE_ONE_FROM_CART', payload: id })
            }
        }
    },

    clearCart: () => {
        return async (dispatch, getState) => {
            dispatch({ type: "CLEAR_CART", payload: null })
        }
    }
}

export default productActions
import axios from 'axios';


const productActions = {
    getProducts: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://cody-coffe-api.herokuapp.com/api/products')
            dispatch({type: "GETPRODUCTS", payload:res.data.response.products})
            dispatch({type: "GETSTOCK", payload:res.data.response.products})
        }
    },
    getOneProduct: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(``)
            dispatch({type: 'GETONEPRODUCT', payload:res.data.response})
        }
    },

    filterProduct: (input) => {
        return async (dispatch, getState) => {
            dispatch ({type: "FILTERPRODUCTS", payload: input})
        }
    },

    getProductsbyCategory: (category) =>{
        return async (dispatch, getState) => {
            const res = dispatch({type: 'GETPRODUCTSBYCATEGORY', payload:category}
            )            
        }
    }
}

export default productActions
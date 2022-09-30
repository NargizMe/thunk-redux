export const getAllCustomers = () => {

    return async (dispatch) => {
        fetch('https://northwind.vercel.app/api/customers')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'GET_ALL_PRODUCTS', payload: data })
            })
    }

}
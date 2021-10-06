import productsConstants from "../Constants/productsConstants";

const initialState = {
  loading: false,
  products: [],
  error: null
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsConstants.FETCH_PRODUCT:
      return {
        ...state,
        loading: true
      };

    case productsConstants.FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: null
      };

    case productsConstants.FETCH_PRODUCT_FAIL: {
      return {
        ...state,
        error: "failed to fetch products",
        loading: false
      };
    }

    default:
      return state;
  }
};

export default productReducer;

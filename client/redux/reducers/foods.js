const GET_FOOD = '@foods/GET_FOOD'
const UPDATE_FOOD_LIST = '@foods/UPDATE_FOOD_LIST'

const initialState = {
  food: {},
  foodList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOD: {
      return {
        ...state,
        food: action.payload
      }
    }
    case UPDATE_FOOD_LIST: {
      return {
        ...state,
        foodList: action.payload
      }
    }
    default:
      return state
  }
}

export function getFood() {
  return (dispatch, getState) => {
    const store = getState()
    const { inputText } = store.common
    const { foodList } = store.foods
    fetch(`/api/v1/${inputText}`)
      .then((r) => r.json())
      .then((result) => {
        dispatch({
          type: GET_FOOD,
          payload: result
        })

        if (result.status === 'success') {
          dispatch({
            type: UPDATE_FOOD_LIST,
            payload: [...foodList, result.data]
          })
        }
      })
      .catch((e) => console.log(e))
  }
}

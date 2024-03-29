const GET_FOOD = '@foods/GET_FOOD'
const UPDATE_FOOD_LIST = '@foods/UPDATE_FOOD_LIST'

const initialState = {
  result: {},
  foodList: [],
  totalNutrients: {
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrate: 0,
    weight: 0,
  },
}

function getTotalNutrients(list = []) {
  return list.reduce((acc, rec) => {
    acc.calories = +(acc.calories + (rec.calories * (rec.weight / 100))).toFixed(2)
    acc.protein = +(acc.protein + (rec.protein * (rec.weight / 100))).toFixed(2)
    acc.fat = +(acc.fat + (rec.fat * (rec.weight / 100))).toFixed(2)
    acc.carbohydrate = +(acc.carbohydrate + (rec.carbohydrate * (rec.weight / 100))).toFixed(2)
    acc.weight = +(acc.weight + rec.weight).toFixed(2)
    return acc
  }, {
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrate: 0,
    weight: 0,
  })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOD: {
      return {
        ...state,
        result: action.payload
      }
    }
    case UPDATE_FOOD_LIST: {
      return {
        ...state,
        foodList: action.payload,
        totalNutrients: getTotalNutrients(action.payload)
      }
    }
    default:
      return state
  }
}

export const getFood = (name = '', weight = 100) => {
  return (dispatch, getState) => {
    const store = getState()
    const { foodList } = store.foods
    fetch(`/api/v1/${name}`)
      .then((r) => r.json())
      .then((result) => {
        if (result.status !== 'success') {
          dispatch({
            type: GET_FOOD,
            payload: result
          })
          throw new Error(result)
        }
        return result
      })
      .then(({ data: product }) => {
        const updatedFoodList = [...foodList, { ...product, weight }]
        dispatch({
          type: UPDATE_FOOD_LIST,
          payload: updatedFoodList
        })
      })
      .catch((e) => console.log(e))
  }
}

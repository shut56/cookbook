import React from 'react'

const Table = ({ list }) => {
  const totalAmount = (arr) => {
    return arr.reduce((acc, rec) => {
      return {
        ...acc,
        calories: acc.calories + rec.calories,
        protein: acc.protein + rec.protein,
        fat: acc.fat + rec.fat,
        carbohydrate: acc.carbohydrate + rec.carbohydrate,
        weight: acc.weight + rec.weight,
      }
    }, {
      calories: 0,
      protein: 0,
      fat: 0,
      carbohydrate: 0,
      weight: 0,
    })
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Calories</th>
          <th>Proteins</th>
          <th>Fats</th>
          <th>Carbo</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((element) => {
            return (
              <tr key={element._id}>
                <td>{element?.name}</td>
                <td>{element?.calories}</td>
                <td>{element?.protein}</td>
                <td>{element?.fat}</td>
                <td>{element?.carbohydrate}</td>
                <td>{element?.weight}</td>
              </tr>
            )
          })
        }
      </tbody>
      <tfoot>
        <tr>
          <td className="font-bold">Summary:</td>
          <td>{totalAmount(list)?.calories.toFixed(2)}</td>
          <td>{totalAmount(list)?.protein.toFixed(2)}</td>
          <td>{totalAmount(list)?.fat.toFixed(2)}</td>
          <td>{totalAmount(list)?.carbohydrate.toFixed(2)}</td>
          <td>{totalAmount(list)?.weight.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default Table

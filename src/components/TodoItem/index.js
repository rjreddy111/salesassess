// Write your code here

import './index.css'

const TodoItem = props => {
  const {eachData} = props
  const {Name, Reviews} = eachData

  return (
    <li className="eachListContainer">
      <div className="texts">
        <p>{Reviews}</p>
        <p>{Name}</p>
      </div>
      <p className="circle-with-quotes">
        <span className="quotes">&quot;</span>{' '}
      </p>
    </li>
  )
}

export default TodoItem

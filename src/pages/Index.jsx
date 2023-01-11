import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Index.scss'
import { setFirstInput, setSecondInput,  setOperator } from '../redux/actions/calculateActions'

export default function Index() {

  const firstInputValue = useSelector(state => state.calculateReducer.firstInputValue)
  const secondInputValue = useSelector(state => state.calculateReducer.secondInputValue)
  const result = useSelector(state => state.calculateReducer.result)
  const dispatch = useDispatch()

  return (
    <div className='home-page'>

    <section className="start">
    <div className="container">
        <div className="row">
          <div className="input-group">
            <input type="number" value={firstInputValue} onChange={(e) => dispatch(setFirstInput(e.target.value))} />
            <input type="number" value={secondInputValue} onChange={(e) => dispatch(setSecondInput(e.target.value))} />
          </div>
          <div className="actions">
            <button onClick={() => dispatch(setOperator('+'))} >  Sum   </button>
            <button onClick={() => dispatch(setOperator('-'))}  > Minus   </button>
            <button onClick={() => dispatch(setOperator('*'))}  > Multiply </button>
            <button onClick={() => dispatch(setOperator('/'))} > Divide   </button>
          </div>
          <p className="result"> Result is {result}  </p>
        </div>
      </div>
    </section>

    <footer>
      <p className="copyright"> Created by <a href='https:/github.com/nihat-js'> nihat-js  </a> </p>
    </footer>

      
    </div>
  )
}


// Bu buttonlar da isleyir. Xususi olaraq   calculateActions.js-de funksiyalar   yaratmadan bele etmek olar !!


{/* <button onClick={() => dispatch({ type: 'setOperator', value: '+' })} >  Sum   2 </button> */}
// <button onClick={() => dispatch({ type: 'setOperator', value: '-' })} > Minus   </button>
// <button onClick={() => dispatch({ type: 'setOperator', value: '*' })}  > Multiply </button>
// <button onClick={() => dispatch({ type: 'setOperator', value: '/' })} > Divide   </button>
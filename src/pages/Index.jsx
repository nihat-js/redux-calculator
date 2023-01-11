import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Index() {

  const firstInputValue = useSelector(state => state.calculateReducer.firstInputValue)
  const secondInputValue = useSelector(state => state.calculateReducer.secondInputValue)
  const result = useSelector(state => state.calculateReducer.result)
  const dispatch = useDispatch()

  return (
    <div className='home-page'>
      <div className="container">
        <div className="row">
          <input type="number"  value={firstInputValue} onChange =  { (e) => dispatch({ value : e.target.value , type : 'setFirstInput'  })   }  />
          <input type="number"  value={secondInputValue} onChange =  { (e) => dispatch({ value : e.target.value , type : 'setSecondInput'  })   }   />
          <button onClick={ () => dispatch({type : 'changeOperator' ,  value :'+' })  } >  Sum   </button>
          <button onClick={ () => dispatch( {type : 'changeOperator' ,   value :'-' })  } > Minus   </button>
          <button onClick={ () => dispatch({ type : 'changeOperator' , value :'*' })  }  > Multiply </button>
          <button onClick={ () => dispatch({ type : 'changeOperator' ,  value :'/' })  } > Divide   </button>
          <p className="text"> Result is {result }  </p>
        </div>
      </div>
    </div>
  )
}

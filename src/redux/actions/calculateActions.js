export const setFirstInput = (value) => {
  return {
    type : 'setFirstInput',
    value :  Number(value)
  }
}

export const setSecondInput = (value) => {
  return {
    type : 'setSecondInput',
    value : Number(value)
  }
}
export const setOperator = (operator) => {
  return {
    type : 'setOperator' , 
    value : operator,
    
  }
}
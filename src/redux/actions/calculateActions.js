export const setFirstInput = (value) => {
  return {
    type : 'setFirstInput',
    value :  value
  }
}

export const setSecondInput = (value) => {
  return {
    type : 'setSecondInput',
    value : value
  }
}
export const setOperator = (operator) => {
  return {
    type : 'setOperator' , 
    value : operator,
    
  }
}
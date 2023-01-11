const initialStates = {
	firstInputValue: 5,
	secondInputValue: 12,
	result: 60, 
	operator: '*'

}

export const calculateReducer = (state = initialStates, action) => {
	let result
	switch (action.type) {
		case "setFirstInput":
			result = calculateResult(action.value, state.secondInputValue, state.operator)
			console.log('result',result)
			return { ...state, firstInputValue: action.value, result: result }
			break;
		case "setSecondInput":
			result = calculateResult(state.firstInputValue, action.value, state.operator)
			return { ...state, secondInputValue: action.value, result: result }
			break;
		case "setOperator":
			result = calculateResult(state.firstInputValue, state.secondInputValue, action.value)
			return { ...state ,operator : action.value , result : result    }
		default:
			return state
	}
}

const calculateResult = (x, y, operator) => {
	if (operator == "+") {
		return x + y
	} else if (operator == '-') {
		return x - y
	} else if (operator == '*') {
		return x * y
	} else if (operator == '/') {
		return x / y
	}
}
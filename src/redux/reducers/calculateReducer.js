const initialStates = {
	firstInputValue: 5,
	secondInputValue: 12,
	result : 60,
	operation :'*'

}

export const calculateReducer = (state = initialStates, action) => {
	switch (action.type) {
		case "setFirstInput":
			return { ...state, firstInputValue: action.value  }
			break;
		case "setSecondInput":
			return { ...state, secondInputValue: action.value }
			break;
		default  : 
			return state 
	}


}
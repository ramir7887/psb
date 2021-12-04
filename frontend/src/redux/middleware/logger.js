const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log("Действие:", action);
	const returnValue = next(action);
	console.log("Обновленное состояние:", store.getState());
	console.groupEnd();
	return returnValue;
};

export default logger;

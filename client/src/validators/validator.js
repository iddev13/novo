export const required = (value) => {
	if (value) return undefined;
	return "Field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
	if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
	return undefined;
}

export const emailValidator = (value) => {
	if (value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return undefined;
	return 'Invalid email address';
}
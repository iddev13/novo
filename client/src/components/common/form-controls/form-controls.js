import React, { useState } from 'react';
import './form-controls.scss';

export const Input = ({ input, meta, ...props }) => {
	// debugger
	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className="formControl__item">
				<input {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	)
}

export const ProfileInput = ({ input, meta, ...props }) => {
	// debugger
	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className="profileFormControl__item">
				<input {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	)
}

export const InputFile = ({ input, meta, ...props }) => {
	// debugger
	delete input.value

	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className="formControl__item">
				<input type="file" {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	)
}

export const DialogInput = ({ input, meta, ...props }) => {
	// debugger
	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className="form-dialogs__item">
				<input {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	)
}

export const DialogInputFile = ({ input, meta, ...props }) => {
	// debugger
	delete input.value

	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className="form-dialogs__item">
				<input type="file" {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	)
}

export const Textarea = ({ input, meta, ...props }) => {
	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className="formControl__itemTextarea">
				<textarea {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	)
}


export const Checkbox = ({ input, meta, ...props }) => {

	let [checkboxValue, setCheckboxValue] = useState(false);

	const toggleValue = () => {
		if (checkboxValue) {
			setCheckboxValue(false)
		} else {
			setCheckboxValue(true);
		}
	}

	return (
		<div className={`formControl ${meta.error && meta.touched ? "error" : ''}`}>
			<div className={`formControl__item checkbox ${checkboxValue ? "active" : ""}`} onClick={toggleValue}>
				<input {...input} {...props} />
			</div>
			{meta.error && meta.touched && <span>Check is required</span>}
		</div>
	)
}
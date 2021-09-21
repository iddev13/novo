import React, { Component } from 'react'
import Select from 'react-select'

const filterOptions = [
	{ value: 'Грузовики', label: 'Грузовики' },
	{ value: 'модель', label: 'модель' },
	{ value: 'марка', label: 'марка' },
	{ value: 'год', label: 'год' }
]

const customStyles = {
	option: (provided, state) => ({
		...provided,
		borderBottom: '1px dotted pink',
		color: state.isSelected ? 'red' : 'blue',
		padding: 20,
	}),
	// control: () => ({
	// 	// none of react-select's styles are passed to <Control />
	// 	width: 200,
	// }),
	singleValue: (provided, state) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = 'opacity 300ms';

		return { ...provided, opacity, transition };
	},
	indicatorSeparator: () => ({
		display: 'none'
	})
}

const SelectRV2 = (props) => {
	return (
		<Select
			defaultValue={[filterOptions[2], filterOptions[3]]}
			isMulti
			name="colors"
			options={filterOptions}
			className="basic-multi-select"
			classNamePrefix="select"
			styles={customStyles}
		/>
	)
}

export default SelectRV2;
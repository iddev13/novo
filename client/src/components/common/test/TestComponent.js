import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import WithPlusSelect from "../selects/with-plus/WithPlusSelect";
import { getFilterItemsBrands, getFilterItemsTypes } from "../../../redux/selectors/filter-selector";
import { actionsSearchResult } from "../../../redux/reducers/searchResult-reduser";
import { getFilterItems } from "../../../redux/selectors/searchResult-selector";


const TestComponent = ({ itemTypeTypes, itemBrands, setFilterItem, filterItems, ...props }) => {
	// debugger
	const GreenCheckbox = withStyles({
		root: {
			color: green[400],
			'&$checked': {
				color: green[600],
			},
			'& .MuiSvgIcon-root': {
				fill: '#009661'
			}
		},
		checked: {}
	})((props) => <Checkbox color="default" {...props} />);

	const handlerTypes = (name, value, checked) => {
		setFilterItem(name, value, checked)
	}

	const typeList = itemTypeTypes.map(elem => {
		return <label
			style={{
				display: 'flex', flexDirection: 'row-reverse', alignItems: 'center',
				justifyContent: 'flex-end', marginBottom: 10, gap: 10
			}}
			htmlFor={elem.name}
			key={elem.id}>
			{elem.name}
			<input
				id={elem.name}
				type="checkbox"
				onChange={(event) => { handlerTypes('category', event.currentTarget.value, event.target.checked) }}
				value={elem.name}
			/>
		</label>
	})

	const brandList = itemBrands.map(elem => {
		return <label
			style={{
				display: 'flex', flexDirection: 'row-reverse', alignItems: 'center',
				justifyContent: 'flex-end', marginBottom: 10, gap: 10
			}}
			htmlFor={elem.name}
			key={elem.id}>
			{elem.name}
			<input
				id={elem.name}
				type="checkbox"
				onChange={(event) => { handlerTypes('brand', event.currentTarget.value, event.target.checked) }}
				value={elem.name}
			/>
		</label>
	})

	return (
		<section>
			<div className="container">
				<div className="test">
					TestComponent
					<WithPlusSelect
						selected="Грузоподьемность">
					</WithPlusSelect>
					{typeList}
					{brandList}
					{filterItems.map((elem, index) => {
						return <div key={index.toString()}>
							{/* <span>{elem}</span>
							<span>{elem}</span> */}
						</div>
					})}
				</div>
			</div>
		</section>
	)
}

let mapStateToProps = (state) => {
	return {
		itemTypeTypes: getFilterItemsTypes(state),
		itemBrands: getFilterItemsBrands(state),
		filterItems: getFilterItems(state)
	}
}

const TestComponentContainer = connect(mapStateToProps, {
	setFilterItem: actionsSearchResult.setFilterItems
})(TestComponent)

export default TestComponentContainer;

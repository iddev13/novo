import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { allCategoryHelpFunction } from "../../../helpers/SelectHelper";
import { useHttp } from "../../../hooks/Hooks";
import { actionsSearchResult, getItemsTC } from "../../../redux/reducers/searchResult-reduser";
import { getNovodbCars } from "../../../redux/selectors/filter-selector";
import { getFilterItems, getFilterItemsBrands, getFilterItemsTypes, getItemSearchResult, getSortItemsSearchResult } from "../../../redux/selectors/searchResult-selector";
import SearchResult from "./SearchResult";

let mapStateToProps = (state) => {
	return {
		cars: getNovodbCars(state),
		items: getItemSearchResult(state),
		sortItems: getSortItemsSearchResult(state),
		carrying: getFilterItemsTypes(state),
		itemBrands: getFilterItemsBrands(state),
		filterItems: getFilterItems(state)
	}
}

const SearchResultCont = ({ items,
	sortItems, removeSortValue, setSortItem, removeSortItem, removeAllSortItems,
	carrying, itemBrands, filterItems, setFilterItem, onChangeItemChecked,
	...props }) => {
	// debugger
	const [weightCat, setWeightCat] = useState(allCategoryHelpFunction(props.cars, 'weightCat'));

	const { request } = useHttp();

	const getData = () => props.getItemsTC(request)

	useEffect(() => { getData() }, [])

	return (
		<SearchResult
			weightCat={weightCat}
			setWeightCat={setWeightCat}
			items={items}
			sortItems={sortItems}
			setSortItem={setSortItem}
			removeSortItem={removeSortItem}
			removeAllSortItems={removeAllSortItems}
			removeSortValue={removeSortValue}
			carrying={carrying}
			itemBrands={itemBrands}
			filterItems={filterItems}
			setFilterItem={setFilterItem}
			onChangeItemChecked={onChangeItemChecked}
		/>
	)
}


const SearchResultContainer = connect(mapStateToProps, {
	getItemsTC,
	removeSortValue: actionsSearchResult.removeSortValue,
	setSortItem: actionsSearchResult.setSortItem,
	removeSortItem: actionsSearchResult.removeSortItem,
	removeAllSortItems: actionsSearchResult.removeAllSortItems,
	setFilterItem: actionsSearchResult.setFilterItems,
	onChangeItemChecked: actionsSearchResult.onChangeItemChecked
})(SearchResultCont);

export default SearchResultContainer;
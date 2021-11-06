import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { allCategoryHelpFunction } from "../../../helpers/SelectHelper";
import { useHttp } from "../../../hooks/Hooks";
import { actionsSearchResult, getItemsTC } from "../../../redux/reducers/searchResult-reduser";
import { getNovodbCars } from "../../../redux/selectors/filter-selector";
import { getItemSearchResult, getSortItemsSearchResult } from "../../../redux/selectors/searchResult-selector";
import SearchResult from "./SearchResult";

let mapStateToProps = (state) => {
	return {
		cars: getNovodbCars(state),
		items: getItemSearchResult(state),
		sortItems: getSortItemsSearchResult(state)
	}
}

const SearchResultCont = ({ items, sortItems, setSortItem, removeSortItem, removeAllSortItems, ...props }) => {
	// debugger
	const [weightCat, setWeightCat] = useState(allCategoryHelpFunction(props.cars, 'weightCat'));

	const { request } = useHttp();

	const getData = () => {
		props.getItemsTC(request)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<SearchResult
			weightCat={weightCat}
			setWeightCat={setWeightCat}
			items={items}
			sortItems={sortItems}
			setSortItem={setSortItem}
			removeSortItem={removeSortItem}
			removeAllSortItems={removeAllSortItems}
		/>
	)
}


const SearchResultContainer = connect(mapStateToProps, {
	getItemsTC,
	setSortItem: actionsSearchResult.setSortItem,
	removeSortItem: actionsSearchResult.removeSortItem,
	removeAllSortItems: actionsSearchResult.removeAllSortItems
})(SearchResultCont);

export default SearchResultContainer;
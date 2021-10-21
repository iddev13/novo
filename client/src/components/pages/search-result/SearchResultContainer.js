import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { allCategoryHelpFunction } from "../../../helpers/SelectHelper";
import { useHttp } from "../../../hooks/Hooks";
import { getItemsTC } from "../../../redux/reducers/searchResult-reduser";
import { getNovodbCars } from "../../../redux/selectors/filter-selector";
import { getItemSearchResult } from "../../../redux/selectors/searchResult-selector";
import SearchResult from "./SearchResult";

let mapStateToProps = (state) => {
	return {
		cars: getNovodbCars(state),
		items: getItemSearchResult(state)
	}
}

const SearchResultCont = ({ items, ...props }) => {
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
		/>
	)
}


const SearchResultContainer = connect(mapStateToProps, {
	getItemsTC
})(SearchResultCont);

export default SearchResultContainer;
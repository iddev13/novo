import { useState } from "react";
import { connect } from "react-redux";
import { allCategoryHelpFunction } from "../../../helpers/SelectHelper";
import { getNovodbCars, getSelectorValueCountry } from "../../../redux/selectors/filter-selector";
import SearchResult from "./SearchResult";

let mapStateToProps = (state) => {
	return {
		cars: getNovodbCars(state),
		countries: getSelectorValueCountry(state),
	}
}

// WeightCat select

const SearchResultCont = (props) => {
	const [weightCat, setWeightCat] = useState(allCategoryHelpFunction(props.cars, 'weightCat'));
	return (
		<SearchResult
			weightCat={weightCat}
			setWeightCat={setWeightCat} />
	)
}


const SearchResultContainer = connect(mapStateToProps, {})(SearchResultCont);

export default SearchResultContainer;
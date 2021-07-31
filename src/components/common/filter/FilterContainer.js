import { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getNovodbCars, getSelectorValueCountry } from "../../../redux/selectors/filter-selector";
import Filter from "./Filter";

const FilterContainer = (props) => {

	// Categogy buttons
	const allCategories = [...new Set(props.cars.map(elem => elem.category))];
	const [buttons, setButtons] = useState(allCategories);

	// WeightCat select
	const allWeidhtCat = [...new Set(props.cars.map(elem => elem.weightCat))];
	const [weightCat, setWeightCat] = useState(allWeidhtCat);

	// BrandCat select
	const allBrandCat = [...new Set(props.cars.map(elem => elem.brand))];
	const [brandCat, setBrandCat] = useState(allBrandCat);

	return (
		<>
			<Filter
				cars={props.cars}
				countries={props.countries}
				buttons={buttons}
				weightCat={weightCat}
				setWeightCat={setWeightCat}
				brandCat={brandCat}
				setBrandCat={setBrandCat}
			/>
		</>
	)
}

let mapStateToProps = (state) => {
	return {
		cars: getNovodbCars(state),
		countries: getSelectorValueCountry(state),
	}
}



// const FilterContainer = connect(mapStateToProps, {})(Filter);

// export default FilterContainer;

export default compose(
	connect(mapStateToProps, {}))(FilterContainer);
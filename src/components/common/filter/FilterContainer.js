import { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { allCategoryHelpFunction } from "../../../helpers/SelectHelper";
import { getNovodbCars, getSelectorValueCountry } from "../../../redux/selectors/filter-selector";
import Filter from "./Filter";

const FilterContainer = (props) => {

	// Categogy buttons
	const [buttons, setButtons] = useState(allCategoryHelpFunction(props.cars, 'category'));

	// WeightCat select
	const [weightCat, setWeightCat] = useState(allCategoryHelpFunction(props.cars, 'weightCat'));

	// Country select
	const [country, setCountry] = useState(allCategoryHelpFunction(props.cars, 'country'));

	// BrandCat select
	const [brandCat, setBrandCat] = useState(allCategoryHelpFunction(props.cars, 'brand'));

	// BrandCat select
	const [model, setModel] = useState(allCategoryHelpFunction(props.cars, 'model'));

	// Year select
	const [year, setYear] = useState(allCategoryHelpFunction(props.cars, 'year'));

	// Price select
	const [price, setPrice] = useState(allCategoryHelpFunction(props.cars, 'price'));

	// Mileage select
	const [mileage, setMileage] = useState(allCategoryHelpFunction(props.cars, 'mileage'));

	// Weight select
	const [weight, setWeight] = useState(allCategoryHelpFunction(props.cars, 'weight'));

	return (
		<>
			<Filter
				cars={props.cars}
				countries={props.countries}
				buttons={buttons}
				setButtons={setButtons}
				weightCat={weightCat}
				setWeightCat={setWeightCat}
				brandCat={brandCat}
				setBrandCat={setBrandCat}
				country={country}
				setCountry={setCountry}
				model={model}
				setModel={setModel}
				year={year}
				setYear={setYear}
				price={price}
				setPrice={setPrice}
				mileage={mileage}
				setMileage={setMileage}
				weight={weight}
				setWeight={setWeight}
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
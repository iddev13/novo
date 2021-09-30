import { connect } from "react-redux";
import ProductCard from "./ProductCard";

let mapStateToProps = (state) => {
	return {

	}
}

const ProductCardContainer = connect(mapStateToProps, {})(ProductCard);

export default ProductCardContainer;
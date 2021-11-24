import CloseIcon from '@material-ui/icons/Close';
import './SearchResult.scss';

const SearchResultItem = ({ category, categoryName, value1, value2 = null, removeSortItem, onChangeItemChecked, ...props }) => {
	// debugger
	return (
		<div className="content-searchResult__item">
			<div className="content-searchResult__itemCategoty">
				<p>{categoryName}</p>
			</div>
			<div className="content-searchResult__itemValue">
				<span className="content-searchResult__itemVal1"> {value1}</span>
				{
					value2 && <span className="content-searchResult__itemTo">до {value2}</span>
				}
				<button onClick={() => {
					removeSortItem(category, value1)
					onChangeItemChecked(value1, false)
				}}>
					<CloseIcon />
				</button>
			</div>
		</div>
	)
}

export default SearchResultItem;
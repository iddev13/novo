import SliderArrow from "../../../../common/sprite/SliderArrow";


export default function MessagePagination() {
	return (
		<nav className="messagePagination">
			<div className="messagePagination__inner">
				<button className="messagePagination__prev"><SliderArrow /></button>
				<div className="messagePagination__pages">
					1 <span>страница</span>
				</div>
				<button className="messagePagination__next"><SliderArrow /></button>
			</div>
		</nav>
	);
}
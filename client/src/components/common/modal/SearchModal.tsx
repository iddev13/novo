import './Modal.scss';

type PropsType = {
	active: boolean,
	setActive: (v: boolean) => void,
	children: any
}

const SearchModal: React.FC<PropsType> = ({ active, setActive, children }) => {
	return (
		<>
			<div
				id="search-modal"
				className={active ? 'search-modal active' : 'search-modal'}
				onClick={() => { setActive(false) }}>
				<div
					className="search-modal__content"
					onClick={(event) => { event.stopPropagation() }}
				>
					{children}
					<button
						type="button"
						className="search-modal__close-btn"
						onClick={() => { setActive(false) }}
					></button>
				</div>
			</div>

		</>
	)
}

export default SearchModal;
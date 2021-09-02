import './Modal.scss';

const Modal = ({ active, setActive, children }) => {
	return (
		<>
			<div
				id="modal1"
				className={active ? 'modal active' : 'modal'}
				onClick={() => { setActive(false) }}>
				<div
					className="modal__content"
					onClick={(event) => { event.stopPropagation() }}>
					{children}
				</div>
			</div>

		</>
	)
}

export default Modal;
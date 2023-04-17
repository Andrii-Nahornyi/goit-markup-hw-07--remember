(() => {
	const refs = {
		openMenuBtn: document.querySelectorAll("[data-modal-open]"),
		closeMenuBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs.openMenuBtn.forEach((el)) => {
		el.addEventListener("click", toggleModal);
	});

	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
		document.body.classList.toggle("no-scroll");
	}
})();

const checkboxes = document.querySelectorAll('#escenario-prueba-indice input[type=checkbox]');

if (!checkboxes) {
	console.error('No se encontraron elementos checkboxes');
}

const statusText = {
	susses: '✅',
	error: '❌',
	default: '➖',
};

checkboxes.forEach((checkbox) => {
	let currentState = 'default'; // Estado inicial
	const statusLabel = checkbox.closest('li')?.querySelector('.mark');
	const status = checkbox.dataset.sts || 'default'; // Estado actual del checkbox

	checkbox.addEventListener('change', () => assignedStatus());

	const assignedStatus = () => {
		// Cambiar el estado
		if (currentState === 'default') {
			currentState = 'correct';
		} else if (currentState === 'correct') {
			currentState = 'fail';
		} else {
			currentState = 'default';
		}

		console.log('estado:', currentState);

		// Actualizar el estado en la interfaz
		statusLabel.innerHTML = statusText[currentState];
	};

	// Actualizar el estado en la interfaz
	statusLabel.innerHTML = statusText[status];
});

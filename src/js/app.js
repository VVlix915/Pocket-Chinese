import { render } from './render.js';
import { setLanguage, navigateTo } from './router.js';

// Make functions globally available for onclick handlers
window.navigateTo = navigateTo;
window.setLanguage = setLanguage;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    render();
});

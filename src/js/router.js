import { setCurrentLang, setCurrentPage, setCurrentRecipeId, setCurrentCultureCategory, setCurrentScenario } from './state.js';
import { render } from './render.js';

export function setLanguage(lang) {
    setCurrentLang(lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    render();
}

export function navigateTo(page, recipeId = null, cultureCategory = null, scenario = null) {
    setCurrentPage(page);
    setCurrentRecipeId(recipeId);
    setCurrentCultureCategory(cultureCategory);
    setCurrentScenario(scenario);
    render();
    window.scrollTo(0, 0);
}

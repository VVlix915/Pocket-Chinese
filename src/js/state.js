let currentLang = 'zh';
let currentPage = 'home';
let currentRecipeId = null;
let currentCultureCategory = null;
let currentScenario = null;

export const getState = () => ({
    currentLang,
    currentPage,
    currentRecipeId,
    currentCultureCategory,
    currentScenario
});

export const getCurrentLang = () => currentLang;
export const getCurrentPage = () => currentPage;
export const getCurrentRecipeId = () => currentRecipeId;
export const getCurrentCultureCategory = () => currentCultureCategory;
export const getCurrentScenario = () => currentScenario;

export const setCurrentLang = (lang) => { currentLang = lang; };
export const setCurrentPage = (page) => { currentPage = page; };
export const setCurrentRecipeId = (id) => { currentRecipeId = id; };
export const setCurrentCultureCategory = (category) => { currentCultureCategory = category; };
export const setCurrentScenario = (scenario) => { currentScenario = scenario; };

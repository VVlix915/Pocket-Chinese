# Pocket-Chinese Modular Structure

## Overview
The app.js file (1912 lines) has been refactored into a clean, modular ES6 structure for better maintainability and organization.

## Directory Structure

```
src/
├── data/
│   ├── translations.js    # Translation strings (zh/en)
│   └── recipes.js         # Recipe data array
└── js/
    ├── app.js            # Main entry point
    ├── state.js          # Application state management
    ├── utils.js          # Utility functions (t())
    ├── router.js         # Navigation & language switching
    └── render.js         # All render functions
```

## Module Details

### src/data/translations.js
- **Export**: `translations` object
- **Content**: Chinese and English translations for all UI text
- **Size**: ~3.6 KB

### src/data/recipes.js
- **Export**: `recipes` array
- **Content**: All recipe data with ingredients, steps, and cultural information
- **Size**: ~59 KB

### src/js/state.js
- **Exports**: 
  - `getState()` - Get all state
  - `getCurrentLang()`, `getCurrentPage()`, `getCurrentRecipeId()`, `getCurrentCultureCategory()`, `getCurrentScenario()` - Individual state getters
  - `setCurrentLang()`, `setCurrentPage()`, `setCurrentRecipeId()`, `setCurrentCultureCategory()`, `setCurrentScenario()` - Individual state setters
- **Purpose**: Encapsulated state management with getter/setter pattern
- **Size**: ~942 B

### src/js/utils.js
- **Export**: `t(key)` function
- **Purpose**: Translation utility function that looks up keys in translations object
- **Usage**: `t('nav.home')` returns translated string based on current language
- **Size**: ~288 B

### src/js/router.js
- **Exports**:
  - `navigateTo(page, recipeId, cultureCategory, scenario)` - Navigate between pages
  - `setLanguage(lang)` - Switch application language
- **Purpose**: Handles routing and language switching
- **Size**: ~659 B

### src/js/render.js
- **Export**: `render()` - Main render function
- **Functions**: All rendering functions including:
  - `render()` - Main render orchestrator
  - `renderHomePage()` - Home page rendering
  - `renderScenariosPage()` - Scenarios page
  - `renderRecipesPage()` - Recipes listing
  - `renderRecipeCard()` - Individual recipe card
  - `renderRecipeDetailPage()` - Recipe details
  - `renderCulturePage()` - Culture page
  - `renderCultureCategoryPage()` - Culture category details
- **Purpose**: All UI rendering logic
- **Size**: ~40 KB

### src/js/app.js
- **Purpose**: Main entry point that initializes the application
- **Functionality**:
  - Imports render and router functions
  - Exposes functions globally for onclick handlers
  - Initializes app on DOMContentLoaded
- **Size**: ~313 B

## Key Changes

1. **State Encapsulation**: All state variables now use getter/setter functions
2. **ES6 Modules**: Proper import/export syntax throughout
3. **Separation of Concerns**: 
   - Data separated from logic
   - State management isolated
   - Rendering separated from routing
4. **Global Window Exposure**: `navigateTo` and `setLanguage` exposed on window object for onclick handlers
5. **Updated index.html**: Now loads app.js as an ES6 module

## Usage

The application works exactly the same as before but with better code organization. To use:

```html
<!-- index.html -->
<script type="module" src="src/js/app.js"></script>
```

## Benefits

- ✅ **Maintainability**: Each module has a single, clear responsibility
- ✅ **Readability**: Smaller files are easier to understand
- ✅ **Reusability**: Modules can be imported where needed
- ✅ **Testing**: Individual modules can be tested in isolation
- ✅ **Scalability**: Easy to add new features without cluttering single file
- ✅ **Backwards Compatible**: Functionality remains 100% the same

## Original File

The original `app.js` (1912 lines, 103 KB) is preserved in the repository as backup.

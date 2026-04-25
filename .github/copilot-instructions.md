# Kassaman Atelier - Copilot Instructions

## Project Overview

Kassaman is a luxury jewelry e-commerce platform built with **React 18 + TypeScript + Vite**. It features multi-language support (Armenian/English/Russian), responsive design with Ant Design, and a mock API layer with planned real backend integration.

## Essential Architecture

### Tech Stack & Setup

- **Build**: Vite + React Fast Refresh
- **State Management**: Redux Toolkit (`src/store/`)
- **Data Fetching**: TanStack React Query (with devtools)
- **Internationalization**: i18next with browser auto-detection
- **UI Components**: Ant Design v6 with custom theme (`src/theme.ts`)
- **HTTP Client**: Axios with mock API pattern
- **Animation**: Framer Motion, Swiper, Lenis (smooth scroll)
- **Auth**: Google OAuth (`@react-oauth/google`)

**Commands:**

- `npm run dev` - Start dev server with HMR
- `npm run build` - Type-check + Vite build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview built output

### Core Data Architecture

**State Management Pattern:**

- **Redux**: Global state for `booking` (cart) and `account` (auth/user)
- **React Query**: Data fetching for products, categories, collections, blog
- **i18n**: Language state managed by `i18next` with localStorage persistence

**API Layer Convention** (`src/api/`):

- Currently **mock APIs** that simulate delays (800ms-1500ms)
- Each domain has dedicated file: `products.ts`, `services.ts`, `blog.ts`, etc.
- Return typed Promises (e.g., `Promise<Product[]>`, `Promise<{ success: boolean }>`)
- Example: `src/api/products.ts` filters mock data by category slug

**Custom Hooks Pattern** (`src/hooks/`):

- Wrap React Query: `useProducts(categorySlug?)`, `useCollections()`, `useCategories()`
- Language helper: `useLang()` for current language + `changeLanguage()`
- UI state: `useToggle()`, `useScrollReveal()` (Intersection Observer animation)

### Type System Structure (`src/types/`)

Each domain has a dedicated types file with **specific unions for valid values**:

- `Product` - Uses branded unions: `CategorySlug`, `Gender`, `Material`, `Stone`, `Currency`
- `Category`, `Collection`, `Blog`, `Account`, `Booking` - Mirror your data model
- **Always use specific literal types** (not generic strings) for categories, materials, collections

Example from `src/types/product.ts`:

```typescript
export type CategorySlug =
  | 'rings'
  | 'necklaces'
  | 'bracelets'
  | 'cufflinks'
  | 'earrings'
  | (string & {});
```

### Internationalization Pattern

**File Structure:**

- Locale files: `src/i18n/locales/{am,en,ru}.json` (nested key structure)
- Utilities: `src/i18n/utils/` - Domain-specific translation key helpers

**Usage Convention:**

```typescript
const { t } = useTranslation(''); // Hook pattern
t('service.form.title'); // Namespace dot notation
```

**Key Naming:** `domain.section.field` (e.g., `service.form.success_msg`, `product.details.in_stock`)

### Component Organization

**Structure:**

```
src/components/
├── common/        # Reusable UI: AppTitle, buttons, cards, carousel, drawers
├── layout/        # MainLayout wraps all pages with Header/Footer
└── product/       # Product-specific: ProductList, ProductDetails
```

**Pattern - CSS Modules:**

- All pages & components use `styles.module.css` for scoped styles
- Import: `import styles from './styles.module.css'`
- Apply: `className={styles.className}`

**Pattern - Page Components:**

- Located in `src/pages/{PageName}/index.tsx`
- Complex pages have subdirectories: `src/pages/Services/components/ServiceForm/`
- Types for page-specific data in sibling `types.ts`, utilities in `utils.ts`

### Mock Data Pattern

**Location:** `src/mock/mock{Domain}.ts` (e.g., `mockProducts.ts`, `mockBlog.ts`)

- Used by API layer to simulate real data
- When backend integrates, replace API implementations but keep hook interface constant

**Database-like Structure:** Products reference categories, categories reference products - maintain integrity in mock data.

## Component Communication Patterns

### Form Handling (Ant Design + React Hook Form pattern)

Implemented in `src/pages/Services/components/ServiceForm/index.tsx`:

- Use `Form.useForm<IServiceInquiry>()` for type-safe forms
- Custom types in sibling `types.ts` file
- `onFinish` is async - wrap API call with try/catch, use `antMessage` for notifications
- Always set `requiredMark={false}` for custom validation styling
- Apply `className={styles.minimalInput}` to Ant components

### Cross-Component State Flow

```
Redux (booking/account) → Header/Cart Updates
React Query → Product Lists Auto-refresh on filter
Outlet → Page-specific content within MainLayout
```

## Project-Specific Conventions

### Translation Keys

- **Never hardcode strings** - use `t()` hook throughout UI
- **Validate key paths exist** in locale JSONs before adding features
- Language detection: Tries localStorage → browser language → fallback to Armenian (`am`)

### Image Assets

- Organized by category: `src/assets/img/{category}/*.jpg`
- Use relative paths: `import SERVICE_FORM_IMAGE from '...'` or direct path in const files
- Page components often have image constants in sibling `const.ts`

### Styling Conventions

- **CSS Modules** only (no inline styles except for animations)
- Use class names like `splitSection`, `wrapper`, `formSide` (camelCase in modules)
- Theme color customization in `src/theme.ts` (Ant Design ConfigProvider)

### API Integration Strategy

1. Create types in `src/types/domain.ts`
2. Create mock in `src/mock/mockDomain.ts`
3. Implement API in `src/api/domain.ts` (currently returns mock data with delay)
4. Wrap in custom hook `src/hooks/useDomain.ts` using React Query
5. Use hook in components - API switching is transparent to UI layer

## File Naming & Organization

- **Component files**: PascalCase: `ServiceForm/`, `ProductDetails/`
- **Utilities/hooks**: camelCase: `useProducts.ts`, `validation.ts`
- **Type files**: Always `types.ts` at domain level
- **Constants**: `const.ts` for domain-specific constants (e.g., SELECT options, image paths)

## Critical Integration Points

1. **Redux → Components**: Use `useSelector` / `useDispatch` with typed hooks from `src/store/hook.ts`
2. **i18n → Forms**: Validation messages reference `t()` keys in form rules
3. **React Query + Ant Loading**: Components receive `loading` state from hooks, pass to Button/Spin
4. **Google OAuth**: Available globally via `GoogleOAuthProvider` wrapper in `src/main.tsx`
5. **Header Interactions**: `LanguageSwitcher` uses `useLang()`, cart icon triggers Redux booking state

## Debugging Tips

- Check locale files for missing translation keys (common source of blank labels)
- Use React Query Devtools (enabled in dev mode) to inspect query states
- Mock API delays are intentional for UX testing - reduce if needed for faster dev iteration
- CSS Modules: If styling not applying, verify className is exported from `.module.css`
- Category/product filtering uses slug matching - ensure mock data slug values are consistent

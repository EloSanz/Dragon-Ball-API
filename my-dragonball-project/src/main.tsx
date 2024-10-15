import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FiltersProvider } from './FiltersProvider.tsx'
// testing github actions
createRoot(document.getElementById('root')!).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)

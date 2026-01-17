
import { createRoot } from 'react-dom/client'
import './scss/main.scss'
import './i18n'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client  = new QueryClient({
    defaultOptions: {}
})

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
        <RouterProvider router={router} />
    </QueryClientProvider>
)

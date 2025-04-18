import { lazy, Suspense } from 'react'
import Loading from './components/Loading'
const Layout = lazy(() => import('./layout/index') )

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Layout/>
    </Suspense>
  )
}

export default App

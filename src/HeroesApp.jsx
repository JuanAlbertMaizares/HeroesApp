import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"

// Componente Principal
export const HeroesApp = () => {
  return (
    // el proveedor de auth estara disponible para los componentes que surgan desde AppRouter
    // se invoca al provider
    <AuthProvider>
        <AppRouter />
    </AuthProvider> 
  )
}

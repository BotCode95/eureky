import React from "react";
import { Home } from "./pages";
import { ToastContainer, toast } from 'react-toastify';
import { authApi } from './api';

const App: React.FC = () => {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const autoLogin = async () => {
      try {
        await authApi.login({
          email: 'patri_eureky@gmail.com',
          password: '123456'
        });
        toast.success('Conexión exitosa con el backend', {
          position: 'bottom-right',
          autoClose: 3000,
        });
      } catch (error) {
        toast.error('No se pudo conectar con el backend. Verifica que esté corriendo en http://localhost:4003', {
          position: 'bottom-right',
          autoClose: 5000,
        });
      } finally {
        setIsReady(true);
      }
    };

    autoLogin();
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen bg-bg-app flex items-center justify-center">
        <div className="text-text-primary text-xl">Cargando...</div>
      </div>
    );
  }

  return (
    <>
      <Home />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
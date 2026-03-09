import { App as AntApp } from 'antd';
import AppRoutes from './routes/routes.tsx';

function App() {
  return (
    <AntApp>
      <AppRoutes />
    </AntApp>
  );
}

export default App;

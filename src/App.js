import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import route from './Router/Router';

function App() {
  return (
    <div className="max-w-[1300px] mx-auto">
      <RouterProvider router={route} ></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

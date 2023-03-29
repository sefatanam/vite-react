import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import TextGenerator from '../pages/TextGenerator';

const router = createBrowserRouter([
  {
    path: "text-generator",
    element: <TextGenerator />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

export default router;

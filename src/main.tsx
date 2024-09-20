 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import { ViewUsers } from './example/users/components/view-users';

// Example data that matches IncomingTableDataT




createRoot(document.getElementById('root')!).render(
  //   const navigate = useNavigate();
  // productTableData.fn.add_fn = () => navigate("add/product");
  // productTableData.show.addButton = true;
  <StrictMode>
   <ViewUsers/>
  </StrictMode>,
)

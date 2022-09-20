import Navbar from "./components/Navbar";
import{Routes,Route} from "react-router-dom"
import { ROUTES } from "./routes";
import Product from "./modules/Product/Product";
import Company from "./modules/Company/Company";

import CompanyProviderContext from "./components/CompanyProvider";
import Post from "./modules/Post/Post";
function App() {
  
  return (
    <>
    <Navbar/>
    <CompanyProviderContext>    
      <Routes>
        
      <Route path={ROUTES.PRODUCT} element={<Product />} exact/>
      <Route path={ROUTES.COMPANIES} element={<Company />} exact/>
      <Route path={ROUTES.POST} element={<Post />} exact/>
    </Routes>
    </CompanyProviderContext>

    </>
  );
}

export default App;

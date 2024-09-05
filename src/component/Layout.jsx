import { useTheme } from "../context/theme";
import Home from "./Home";
const Layout = () => {
  const theme = useTheme();

  return (
    <div className={`${theme.theme}`}>
     <h1>Hello world</h1>
     <Home/>
    </div>
  );
};

export default Layout

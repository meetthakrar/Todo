import { useContext } from "react"; // 1. Import useContext
import Mycontext from "../context/Mycontext"; // 2. Import your context (check path)
import { FaMoon, FaSun } from "react-icons/fa";
import { Navbar } from "../components/Navbar";
import Mytodos from "../components/MyTodos";

function Homepage() {
  // 3. Destructure the values from context
  const { mode, toggleMode } = useContext(Mycontext);

  return (
    <div className={mode}> 
      <Navbar />
      <Mytodos/>
    </div>
  );  
}

export default Homepage;

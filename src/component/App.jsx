import { createContext } from "react";
import ThemeProvider from "../context/theme";
import Layout from "./Layout";
import Quote from "../belajar-react-guru/Quote";
import Stopwatch from "../belajar-react-guru/Stopwatch";
import Quiz from "../belajar-react-guru/Quiz";
import Game from "./TicTacToe";
import CardStack from "./CardStack";
export const User = createContext({
  name: "faiz",
  age: 12,
  id: 1,
});
const App3 = () => {
  return (
    <ThemeProvider>
      <div className="w-full h-full items-center justify-center">
      <CardStack />
      </div>
    </ThemeProvider>
  );
};

export default App3;

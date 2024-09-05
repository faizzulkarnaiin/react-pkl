import { useTheme } from "../context/theme"


const Home = () => {
  const themeContext = useTheme()
  const { theme, setDarkTheme, setLightTheme } = themeContext
  return (
    <div>
      <h3>Theme: {theme}</h3>
      <button onClick={setDarkTheme}>Set Dark</button>
      <button onClick={setLightTheme}>Set Light</button>
    </div>
  )
}

export default Home
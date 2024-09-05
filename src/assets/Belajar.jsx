import { useContext } from "react"
import { User } from "../App"


export default function App2 () {
    const faiz = useContext(User);
    return (
        <>
    <div className="App">
        <h2>name : {faiz.name}</h2>
        <header className="app-header">
            <h1>Faiz MOVIE</h1>
            <div className="movie-container">
                <div className="movie-wrapper">
                    <div className="movie-title"></div>
                    <img src="" alt="" className="image" />
                    <div className="date"></div>
                    <div className="rate"></div>
                </div>
            </div>
        </header>
    </div>


        </>
    )
}
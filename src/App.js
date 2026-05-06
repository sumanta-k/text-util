import "./App.css";
import Navbar from "./components/Navbar.js";
function App() {
    return (
        <>
            <Navbar title="TextUtils" about="about" />
            <div className="container">
                <TextForm
                    heading="Put Text Over Here"
                    title="Text To Analyze"
                />
            </div>
        </>
    );
}

export default App;

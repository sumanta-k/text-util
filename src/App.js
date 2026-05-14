import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";
function App() {
    return (
        <>
            <Navbar title="TextUtils" about="About" />
            <div className="container my-3">
                <TextForm
                    heading="Put Text Over Here"
                    title="Text To Analyze"
                />
                {/* <About /> */}
            </div>
        </>
    );
}

export default App;

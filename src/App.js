import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";
function App() {
    const [mode, setMode] = useState("light"); // Whether dark mode is enabled or NOT
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "grey";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
    };
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

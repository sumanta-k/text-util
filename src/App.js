import './App.css';
function App() {
    let userName = "Sumanta";
    return(
        <>
        <nav>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
        </nav>
            <div className="blank">
                <p>It's time to code in react</p>
            </div>
            <div className="container">
                <p>
                    Hello My name is : <a href="https://github.com/sumanta-k" target="_blank">{userName}</a>
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eaque vero adipisci aspernatur tempore error deserunt? Asperiores sit accusantium non minima facere quia aspernatur! Exercitationem reiciendis doloribus alias quidem amet.
                </p>
            </div>
            <footer>
                <li><a href='https://github.com/sumanta-k' target="_blank">github</a></li>
            </footer>
        </>
    );
}

export default App;

import "./App.css";
import "./normalize.css";

/**
 * TODO: add awesomefont font to search bar <span>+</span>
 */

function App() {
  return (
    <div className="App">
      <aside className="side-menu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox"></section>
    </div>
  );
}

export default App;

// App.jsx
import React from "react";

function Simple() {
  return (
    <div className="website">
      <header className="header">
        <h1>Welcome to My Simple Website</h1>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section id="home">
          <h2>Home Section</h2>
          <p>This is the home section of our simple website.</p>
          <button onClick={() => alert("Hello!")}>Click Me</button>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>We are a small team creating simple websites with JSX.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Simple JSX Website</p>
      </footer>
    </div>
  );
}

export default Simple;

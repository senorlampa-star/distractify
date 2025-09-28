body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #F7CAC9;
  color: #2E4057;
  padding: 2rem;
  transition: background-color 0.5s, color 0.5s;
}

header {
  background-color: #FF6F61;
  padding: 1rem;
  border-radius: 12px;
  color: white;
  text-align: center;
}

nav {
  margin-top: 1rem;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

nav button {
  margin-left: 1rem;
  padding: 0.5rem;
  border: none;
  background: white;
  color: #FF6F61;
  border-radius: 6px;
  cursor: pointer;
}

section {
  margin-top: 2rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

section h2 {
  color: #FF6F61;
}

blockquote {
  margin-top: 1rem;
  font-style: italic;
  color: #555;
}

/* Dark mode */
body.dark {
  background-color: #2E4057;
  color: #F7CAC9;
}

body.dark header {
  background-color: #333;
  color: #F7CAC9;
}

body.dark section {
  background-color: #444;
  color: #F7CAC9;
}

body.dark nav a {
  color: #F7CAC9;
}

body.dark nav button {
  background-color: #F7CAC9;
  color: #2E4057;
}
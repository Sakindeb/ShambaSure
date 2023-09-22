import React from 'react'

export default function Home() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Shamba Sure</h1>
        <p>Your Trusted Partner for Transparent Land Transactions</p>
      </header>

      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Shamba Sure</p>
      </footer>
    </div>
  );
}

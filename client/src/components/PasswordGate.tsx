/**
 * PasswordGate — Clean Editorial Minimal
 * Simple password protection for the entire portfolio
 * Password stored in sessionStorage so it persists for the browser session
 */
import { useState, useEffect } from "react";

const CORRECT_PASSWORD = "allison2024";
const STORAGE_KEY = "portfolio_auth";

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setAuthenticated(true);
    }
    setChecking(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (checking) return null;

  if (authenticated) return <>{children}</>;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* Logo / Name */}
      <div className="mb-12 text-center">
        <h1 className="text-[28px] font-bold text-[#1a1a1a] tracking-tight">Allison Cassing</h1>
        <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] mt-1">UX Researcher</p>
      </div>

      {/* Divider */}
      <div className="w-12 h-px bg-[#e5e5e5] mb-10" />

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <p className="text-[12px] text-[#666] text-center mb-6 leading-relaxed">
          This portfolio is password protected.<br />Please enter the password to continue.
        </p>

        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            autoFocus
            className={`w-full border px-4 py-3 text-[13px] text-[#1a1a1a] placeholder-[#ccc] outline-none transition-colors focus:border-[#1a1a1a] ${
              error ? "border-red-400" : "border-[#e5e5e5]"
            }`}
          />
          {error && (
            <p className="text-[11px] text-red-500 mt-1.5">Incorrect password. Please try again.</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#1a1a1a] text-white text-[11px] tracking-[0.15em] uppercase font-medium py-3 hover:bg-[#333] transition-colors"
        >
          Enter
        </button>
      </form>

      {/* Footer */}
      <p className="text-[10px] text-[#ccc] mt-16">© {new Date().getFullYear()} Allison Cassing</p>
    </div>
  );
}

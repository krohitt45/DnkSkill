import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Code2 } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="bg-card rounded-xl shadow-lg p-8 w-full max-w-sm">
        <div className="flex items-center gap-2 justify-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Code2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl text-foreground">DNK SKILLS</span>
        </div>
        <h2 className="text-lg font-bold text-foreground text-center mb-6">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter your password" className="w-full mt-1 px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90">
            Login
          </button>
        </form>
        <p className="text-xs text-muted-foreground text-center mt-4">Don't have an account? <span className="text-primary cursor-pointer font-semibold">Sign Up</span></p>
      </div>
    </div>
  );
}

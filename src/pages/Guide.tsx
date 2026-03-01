import { useNavigate } from "react-router-dom";
import { Building, Users, Map, FileText, MessageCircle } from "lucide-react";

const guides = [
  {
    id: "company", icon: Building, title: "Company Preparation",
    items: ["TCS Preparation Guide", "Infosys", "Wipro, Capgemini", "Product-Based Companies"],
  },
  {
    id: "interview", icon: Users, title: "Interview Preparation",
    items: ["Technical Interview", "DSA, OOPS, DBMS, OS, CN", "Preparation Strategy"],
  },
  {
    id: "roadmap", icon: Map, title: "Placement Roadmap",
    items: ["3 & 6 Month Plans", "Off-Campus Guide", "Preparation Strategy"],
  },
  {
    id: "resume", icon: FileText, title: "Resume Building",
    items: ["Download Templates", "ATS Friendly Tips", "Projects and Skills"],
  },
  {
    id: "softskills", icon: MessageCircle, title: "Soft Skills",
    items: ["Communication Tips", "Body Language", "Confidence Building"],
  },
];

export default function Guide() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Career Hub</h1>

      {/* Hero Banner */}
      <div className="rounded-xl bg-gradient-to-r from-[hsl(210,30%,12%)] to-[hsl(170,25%,18%)] p-8 text-white">
        <h2 className="text-2xl font-bold">CRACK YOUR <span className="text-primary">DREAM JOB</span></h2>
        <h3 className="text-xl font-bold">WITH STRUCTURED PREPARATION</h3>
        <p className="text-sm opacity-80 mt-2">Get expert guidance to ace your placements with our step-by-step resources!</p>
      </div>

      {/* Guide Cards */}
      <div className="grid grid-cols-2 gap-4">
        {guides.slice(0, 2).map(g => (
          <div key={g.id} className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <g.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold text-foreground text-lg">{g.title}</h4>
            </div>
            <ul className="space-y-1 mb-4">
              {g.items.map(item => <li key={item} className="text-sm text-muted-foreground">• {item}</li>)}
            </ul>
            <button
              onClick={() => navigate(`/guide/${g.id}`)}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {guides.slice(2).map(g => (
          <div key={g.id} className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <g.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold text-foreground">{g.title}</h4>
            </div>
            <ul className="space-y-1 mb-4">
              {g.items.map(item => <li key={item} className="text-sm text-muted-foreground">• {item}</li>)}
            </ul>
            <button
              onClick={() => navigate(`/guide/${g.id}`)}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

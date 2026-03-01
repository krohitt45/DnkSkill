import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, ChevronRight } from "lucide-react";

const topics = [
  "All", "Array", "Strings", "Linked List", "Stacks & Queues", "Trees",
  "Graphs", "Dynamic Programming", "Greedy", "Trie", "Sorting", "Searching",
  "Matrix", "Hashing", "Heap", "Bit Manipulation"
];

const difficulties = [
  { level: "EASY", subtitle: "Core Needs", questions: 10, completion: 20, color: "bg-primary text-primary-foreground", barColor: "bg-primary" },
  { level: "MEDIUM", subtitle: "Intermediate", questions: 8, completion: 15, color: "bg-warning text-warning-foreground", barColor: "bg-warning" },
  { level: "HARD", subtitle: "Advanced Logic", questions: 6, completion: 8, color: "bg-destructive text-destructive-foreground", barColor: "bg-destructive" },
  { level: "PLACEMENT", subtitle: "", questions: 20, completion: 8, color: "bg-accent text-accent-foreground", barColor: "bg-primary" },
  { level: "INTERVIEW", subtitle: "Most Asked Company Questions", questions: 20, completion: 8, color: "bg-muted text-foreground", barColor: "bg-destructive" },
];

export default function Practice() {
  const [selected, setSelected] = useState("All");
  const navigate = useNavigate();
  const displayTopic = selected === "All" ? "Array" : selected;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Practice Problems</h1>
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-foreground">0 <span className="text-muted-foreground font-normal">/ 1000 Solved</span></span>
          <button className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
            <Trophy className="w-4 h-4" /> Leaderboard <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Topic Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {topics.map(t => (
          <button
            key={t}
            onClick={() => setSelected(t)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selected === t ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-secondary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex justify-between text-sm text-muted-foreground">
        <span>All Problems</span>
        <span>All: {difficulties.length} Problems</span>
      </div>

      {/* Problem Cards */}
      <div className="space-y-3">
        {difficulties.map(d => (
          <div key={d.level} className="bg-card rounded-xl p-5 shadow-sm flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-foreground text-lg">{displayTopic}</span>
                <span className={`px-3 py-0.5 rounded-full text-xs font-bold ${d.color}`}>{d.level}</span>
              </div>
              {d.subtitle && <p className="text-sm text-foreground font-medium">{d.subtitle}</p>}
              <p className="text-sm text-muted-foreground">{d.questions} Questions</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Completion</span>
                  <div className={`w-3 h-3 rounded-full ${d.barColor}`} />
                  <span className="text-sm font-semibold text-foreground">{d.completion}%</span>
                </div>
                <div className="w-48 h-2 bg-muted rounded-full mt-1">
                  <div className={`h-full rounded-full ${d.barColor}`} style={{ width: `${d.completion}%` }} />
                </div>
              </div>
              <button
                onClick={() => navigate("/compiler")}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90"
              >
                Solve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

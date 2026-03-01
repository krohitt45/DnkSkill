import { useNavigate } from "react-router-dom";
import { Cloud, Code2, CheckCircle, Star, Trophy, Flame, FileText, Award } from "lucide-react";

const stats = [
  { label: "Courses Completed", value: "0 / 8", icon: Cloud },
  { label: "Problems Solved", value: "0 / 1000", icon: Code2 },
  { label: "Coding Streak", value: "0", icon: CheckCircle },
];

const heatmapData = Array.from({ length: 28 }, () => Math.random());

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-6 min-h-full">
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>

        {/* Welcome Banner */}
        <div className="rounded-xl bg-gradient-to-r from-[hsl(210,30%,12%)] to-[hsl(170,25%,18%)] p-8 text-white">
          <h2 className="text-xl font-semibold mb-1">Welcome back, Rohit! Let's dive into today's learning and coding practice!</h2>
          <p className="text-sm opacity-80">You need 50 more points to get the <span className="text-primary font-semibold">Trainee badge</span> 💎</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map(s => (
            <div key={s.label} className="bg-card rounded-xl p-5 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
              <s.icon className="w-8 h-8 text-muted-foreground/40" />
            </div>
          ))}
        </div>

        {/* Skill Builder Zone */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-4">Skill Builder Zone</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* My Course */}
            <div className="bg-card rounded-xl p-5 shadow-sm flex flex-col min-h-[260px]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-foreground">My Course</span>
              </div>
              <p className="font-semibold text-foreground text-sm">DSA with C++</p>
              <p className="text-xs text-muted-foreground mt-1">✅ DSA with C++ - 45% Completed</p>
              <p className="text-xs text-muted-foreground">✅ 4 / 10 Modules Completed</p>
              <p className="text-xs text-muted-foreground">✅ Continue DSA Practice</p>
              <button onClick={() => navigate("/course-player")} className="mt-auto bg-primary text-primary-foreground rounded-lg py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors">
                Resume Course
              </button>
            </div>

            {/* Today's Homework */}
            <div className="bg-card rounded-xl p-5 shadow-sm flex flex-col min-h-[260px]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-warning/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-warning" />
                </div>
                <span className="font-semibold text-foreground">Today's Homework</span>
              </div>
              <p className="font-semibold text-foreground text-sm">DSA Daily Practice</p>
              <p className="text-xs text-muted-foreground mt-1">✅ Topic: Arrays</p>
              <p className="text-xs text-muted-foreground">✅ Questions: 3 Problems</p>
              <p className="text-xs text-muted-foreground">✅ Difficulty: Easy-Medium</p>
              <button onClick={() => navigate("/today-homework")} className="mt-auto bg-warning text-warning-foreground rounded-lg py-2.5 text-sm font-semibold hover:bg-warning/90 transition-colors">
                Start Practice
              </button>
            </div>

            {/* Weekly Mock Test */}
            <div className="bg-card rounded-xl p-5 shadow-sm flex flex-col min-h-[260px]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded bg-[hsl(210,60%,50%)]/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-[hsl(210,60%,50%)]" />
                </div>
                <span className="font-semibold text-foreground">Weekly Mock Test</span>
              </div>
              <p className="font-semibold text-foreground text-sm">DSA Weekly Assessment</p>
              <p className="text-xs text-muted-foreground mt-1">✅ Sunday - 2:00 PM</p>
              <p className="text-xs text-muted-foreground">✅ Difficulty: Medium</p>
              <p className="text-xs text-muted-foreground">✅ Duration: 90 Minutes</p>
              <button onClick={() => navigate("/weekly-test")} className="mt-auto bg-[hsl(210,60%,50%)] text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-[hsl(210,60%,45%)] transition-colors">
                Start Test
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-72 flex-shrink-0 space-y-4">
        {/* Profile Card */}
        <div className="bg-card rounded-xl shadow-sm p-5 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-2 flex items-center justify-center text-2xl font-bold text-primary">R</div>
          <p className="font-bold text-foreground">Rohit Kumar</p>
          <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">Beginner</span>
          <p className="text-xs text-muted-foreground mt-2">Leaderboard: rankings available</p>
          <div className="mt-3 space-y-2 text-left">
            {[
              { icon: Star, label: "Points", value: "0" },
              { icon: Code2, label: "Problems Solved", value: "0" },
              { icon: FileText, label: "Solutions Submitted", value: "0" },
              { icon: Trophy, label: "Contest Rating", value: "NR" },
            ].map(s => (
              <div key={s.label} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-muted-foreground"><s.icon className="w-3.5 h-3.5" />{s.label}</span>
                <span className="font-semibold text-foreground">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Consistency Tracker */}
        <div className="bg-card rounded-xl shadow-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <Flame className="w-5 h-5 text-warning" />
            <span className="font-bold text-foreground">Consistency Tracker</span>
          </div>
          <p className="text-sm font-semibold text-foreground mb-2">March 2026</p>
          <div className="grid grid-cols-7 gap-1 text-[10px] text-muted-foreground mb-1">
            {["M","T","W","T","F","S","S"].map((d,i) => <span key={i} className="text-center">{d}</span>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {heatmapData.map((v, i) => (
              <div key={i} className="w-full aspect-square rounded-sm" style={{
                backgroundColor: v > 0.7 ? "hsl(var(--primary))" : v > 0.4 ? "hsl(var(--primary) / 0.5)" : v > 0.15 ? "hsl(var(--primary) / 0.2)" : "hsl(var(--muted))"
              }} />
            ))}
          </div>
          <button onClick={() => navigate("/activity-overview")} className="mt-3 w-full bg-[hsl(270,50%,50%)] text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-[hsl(270,50%,45%)]">
            View Full Activity
          </button>
        </div>
      </div>
    </div>
  );
}

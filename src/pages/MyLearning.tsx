import { useNavigate } from "react-router-dom";
import { Clock, Calendar, BookOpen } from "lucide-react";
import courseDsa from "@/assets/course-dsa.jpg";

export default function MyLearning() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">My Learning</h1>
      <p className="text-muted-foreground"><span className="font-semibold text-foreground">Continue</span> your course progress and achieve your goals.</p>

      {/* Course Card */}
      <div className="bg-card rounded-xl shadow-sm overflow-hidden">
        <div className="relative h-52 overflow-hidden">
          <img src={courseDsa} alt="DSA with C++" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,30%,12%)]/90 to-transparent flex flex-col justify-end p-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold w-fit mb-2">Summer Training 2024</span>
            <h2 className="text-2xl font-bold text-card">UI/UX & Frontend Development Bootcamp</h2>
            <p className="text-sm text-card/80 mt-1">Build UI/UX and front-end development skills with a focus on placement preparation!</p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-foreground text-lg">UI/UX & Frontend Development Bootcamp</h3>
              <div className="w-64 h-2 bg-muted rounded-full mt-2"><div className="w-1/4 h-full bg-primary rounded-full" /></div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Akash Mittal | <span className="font-semibold">Mentor</span></p>
              <span className="text-xs text-primary">🌱 Summer Training</span>
            </div>
          </div>
          <div className="flex items-center gap-8 mt-4 text-sm text-muted-foreground">
            <span>📊 25% Completed</span>
            <span>📋 3 / 12 Modules Completed</span>
            <span><Clock className="w-3.5 h-3.5 inline mr-1" />Starts Jun 17</span>
            <span><Clock className="w-3.5 h-3.5 inline mr-1" />Time Spent: 4 hrs 20 min</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button onClick={() => navigate("/course-player")} className="bg-primary text-primary-foreground px-8 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
              Resume Course
            </button>
            <button className="text-sm text-muted-foreground hover:text-foreground">View Curriculum &gt;</button>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: Calendar, label: "Upcoming Live Class", detail: "Monday, Jun 24 | 4:00 PM" },
          { icon: BookOpen, label: "Next Assignment Deadline", detail: "Wednesday, Jun 26" },
          { icon: Calendar, label: "Mock Test Date", detail: "Saturday, Jun 29" },
        ].map(e => (
          <div key={e.label} className="bg-card rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <e.icon className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground text-sm">{e.label}</span>
            </div>
            <p className="text-sm text-muted-foreground">✅ {e.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

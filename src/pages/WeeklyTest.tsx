import { Calendar, Clock, FileText, Flame, CheckSquare } from "lucide-react";

export default function WeeklyTest() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <p className="text-sm text-muted-foreground">My Learning / <span className="text-foreground font-medium">Weekly Test</span></p>

      <div>
        <h1 className="text-2xl font-bold text-foreground">DSA Weekly Assessment – Week 3</h1>
        <p className="text-muted-foreground mt-1">Assigned by Mentor – DSA Daily Practice</p>
      </div>

      {/* Info Bar */}
      <div className="bg-card rounded-xl p-4 shadow-sm flex items-center gap-8">
        <span className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="w-4 h-4" /> Test Date: <span className="font-semibold text-foreground">30 June 2026</span></span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="w-4 h-4" /> Duration: <span className="font-semibold text-foreground">90 Minutes</span></span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground"><FileText className="w-4 h-4" /> Total Marks: <span className="font-semibold text-foreground">50</span></span>
        <span className="px-3 py-1 rounded-lg border border-border text-sm font-medium text-foreground">Not Started</span>
      </div>

      {/* Test Overview Card */}
      <div className="bg-card rounded-xl p-8 shadow-sm max-w-lg mx-auto">
        <h2 className="text-xl font-bold text-foreground mb-6">Test Overview</h2>
        <div className="bg-background rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <CheckSquare className="w-5 h-5 text-primary" />
            <span className="text-foreground">10 MCQ</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckSquare className="w-5 h-5 text-[hsl(210,60%,50%)]" />
            <span className="text-foreground">3 Coding</span>
          </div>
          <div className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-warning" />
            <span className="text-foreground">Difficulty: <span className="font-bold">Medium</span></span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <span className="text-foreground">Time Limit: <span className="font-bold">90</span> min</span>
          </div>

          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 mt-4">
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
}

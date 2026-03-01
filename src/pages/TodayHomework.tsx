import { Calendar, Clock, FileText } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function TodayHomework() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">My Learning / <span className="text-foreground font-medium">Today's Homework</span></p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Due Date: 28 June 2026</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 45 Minutes</span>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-foreground">Today's Homework</h1>
        <p className="text-muted-foreground mt-1">Assigned by Mentor – DSA Daily Practice</p>
      </div>

      {/* Info Bar */}
      <div className="bg-card rounded-xl p-4 shadow-sm flex items-center gap-8">
        <span className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="w-4 h-4" /> Due Date: <span className="font-semibold text-foreground">28 June 2026</span></span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="w-4 h-4" /> Estimated Time: <span className="font-semibold text-foreground">45 Minutes</span></span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground"><FileText className="w-4 h-4" /> Total Marks: <span className="font-semibold text-foreground">20</span></span>
      </div>

      {/* Progress */}
      <div className="bg-card rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-semibold text-foreground">Homework Progress</span>
          <span className="text-sm text-muted-foreground">3 / 12 <span className="text-primary">Completed</span></span>
        </div>
        <Progress value={25} className="h-2" />
      </div>

      {/* Question Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* MCQ */}
        <div className="bg-card rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">📝</span>
              <span className="font-bold text-foreground">MCQ Questions</span>
            </div>
            <span className="text-sm text-muted-foreground">6 / 10 <span className="text-primary">Completed</span></span>
          </div>
          <p className="text-sm text-muted-foreground">10 Questions</p>

          <div className="bg-background rounded-lg p-4 space-y-2">
            <p className="font-semibold text-foreground">MCQ Questions</p>
            <p className="text-sm text-muted-foreground">10 Questions</p>
            <Progress value={60} className="h-1.5" />
            <p className="text-xs text-muted-foreground">3 / 12 Completed</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold text-foreground">MCQ Questions</span>
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">6 / 10 Completed</span>
          </div>
          <p className="text-sm text-muted-foreground">10 Questions</p>
        </div>

        {/* Coding */}
        <div className="bg-card rounded-xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">💻</span>
              <span className="font-bold text-foreground">Coding Problems</span>
            </div>
            <span className="text-sm text-muted-foreground">1 / 4 <span className="text-warning">Attempted</span></span>
          </div>
          <p className="text-sm text-muted-foreground">4 Questions</p>

          <div className="bg-background rounded-lg p-4 space-y-2">
            <p className="font-semibold text-foreground">Coding Problems</p>
            <p className="text-sm text-muted-foreground">4 Questions</p>
            <Progress value={25} className="h-1.5 [&>div]:bg-warning" />
            <p className="text-xs text-muted-foreground">Easy · Medium</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold text-foreground">Coding Problems</span>
            <span className="text-xs px-3 py-1 rounded-full bg-warning/10 text-warning font-semibold">1 / 4 Attempted</span>
          </div>
          <p className="text-sm text-muted-foreground">4 Questions</p>
        </div>
      </div>
    </div>
  );
}

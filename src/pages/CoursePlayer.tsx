import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Pause, SkipForward, Settings, Maximize, ChevronDown, ChevronUp, Lock, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

const modules = [
  {
    title: "Module 1: Introduction", completed: true, lessons: [
      { title: "What is DSA?", completed: true },
      { title: "Why Learn DSA?", completed: true },
    ],
  },
  {
    title: "Module 2: Arrays", completed: false, progress: "3/5", lessons: [
      { title: "Introduction to Arrays", completed: true },
      { title: "Time Complexity", completed: true, active: true },
      { title: "Two Pointer Technique", completed: false, locked: true },
      { title: "Sliding Window", completed: false, locked: true },
      { title: "2D Arrays", completed: false, locked: true },
    ],
  },
  {
    title: "Module 3: Linked List", completed: false, lessons: [
      { title: "Singly Linked List", completed: false, locked: true },
      { title: "Doubly Linked List", completed: false, locked: true },
    ],
  },
  {
    title: "Module 4: Stack", completed: false, lessons: [
      { title: "Stack Implementation", completed: false, locked: true },
      { title: "Stack Applications", completed: false, locked: true },
    ],
  },
];

export default function CoursePlayer() {
  const [playing, setPlaying] = useState(false);
  const [expandedModule, setExpandedModule] = useState(1);
  const [currentLesson, setCurrentLesson] = useState(1); // index in flat list
  const navigate = useNavigate();

  const allLessons = modules.flatMap((m, mi) => m.lessons.map((l, li) => ({ ...l, moduleIndex: mi, lessonIndex: li, moduleTitle: m.title })));
  const current = allLessons[currentLesson];

  return (
    <div className="flex gap-6 h-full">
      {/* Main Content */}
      <div className="flex-1 space-y-4 min-w-0">
        <h1 className="text-xl font-bold text-foreground">Resume Course</h1>

        {/* Course Header */}
        <div className="bg-card rounded-xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <h2 className="font-bold text-foreground text-lg">DSA with C++</h2>
            <p className="text-sm text-muted-foreground">45% Completed · 4 / 10 Modules Completed</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-semibold text-foreground text-sm">Akash Mittal</p>
              <p className="text-xs text-muted-foreground">Duration: 8 hours 25 min</p>
            </div>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold">Continue</button>
          </div>
        </div>

        {/* Video Player */}
        <div className="bg-[hsl(215,28%,17%)] rounded-xl overflow-hidden aspect-video relative flex items-center justify-center">
          <div className="text-center">
            <button onClick={() => setPlaying(!playing)} className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto hover:bg-primary/30 transition-colors">
              {playing ? <Pause className="w-8 h-8 text-primary-foreground" /> : <Play className="w-8 h-8 text-primary-foreground ml-1" />}
            </button>
            <p className="text-[hsl(210,20%,70%)] text-sm mt-3">Video Lecture - {current?.title || "Time Complexity"}</p>
          </div>
          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsl(215,28%,10%)] to-transparent p-3 flex items-center gap-3 text-[hsl(210,20%,80%)]">
            <button onClick={() => setPlaying(!playing)}>{playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}</button>
            <SkipForward className="w-4 h-4 cursor-pointer" />
            <span className="text-xs">12:45 / 18:15</span>
            <div className="flex-1" />
            <Settings className="w-4 h-4 cursor-pointer" />
            <Maximize className="w-4 h-4 cursor-pointer" />
          </div>
        </div>

        {/* Lesson Info */}
        <div>
          <h3 className="font-bold text-foreground text-lg">{current?.title || "Time Complexity"}</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Learn about the <strong>fundamentals</strong> of time complexity and how to analyze the efficiency of algorithms.
            Understand Big O notation and how it is used to express the upper bound of an algorithm's runtime growth.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-foreground mb-2">Resources</h4>
          <div className="flex gap-3">
            <span className="bg-card px-3 py-1.5 rounded-lg text-sm text-muted-foreground border border-border">📄 Big O Notation Concepts.pdf</span>
            <span className="bg-card px-3 py-1.5 rounded-lg text-sm text-muted-foreground border border-border">📄 Time Complexity Explained.txt</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
            className="flex items-center gap-2 bg-card text-foreground px-4 py-2 rounded-lg text-sm border border-border hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>
          <button
            onClick={() => setCurrentLesson(Math.min(allLessons.length - 1, currentLesson + 1))}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90"
          >
            Next Lesson <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Module Sidebar */}
      <div className="w-72 flex-shrink-0 bg-card rounded-xl shadow-sm p-4 overflow-y-auto">
        <h3 className="font-bold text-foreground mb-3">Course Modules</h3>
        <div className="space-y-1">
          {modules.map((m, mi) => (
            <div key={mi}>
              <button
                onClick={() => setExpandedModule(expandedModule === mi ? -1 : mi)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  mi === expandedModule ? "bg-background" : "hover:bg-background"
                }`}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className={`w-4 h-4 ${m.completed ? "text-primary" : "text-muted-foreground/30"}`} />
                  <span className="text-foreground text-left">{m.title}</span>
                </div>
                <div className="flex items-center gap-1">
                  {m.progress && <span className="text-xs text-muted-foreground">{m.progress}</span>}
                  {expandedModule === mi ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                </div>
              </button>
              {expandedModule === mi && (
                <div className="ml-4 space-y-0.5 mt-1">
                  {m.lessons.map((l, li) => {
                    const flatIndex = modules.slice(0, mi).reduce((sum, mod) => sum + mod.lessons.length, 0) + li;
                    return (
                      <button
                        key={li}
                        onClick={() => !l.locked && setCurrentLesson(flatIndex)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-left ${
                          flatIndex === currentLesson
                            ? "bg-primary text-primary-foreground"
                            : l.locked
                            ? "text-muted-foreground"
                            : "text-foreground hover:bg-background"
                        }`}
                      >
                        {l.locked ? <Lock className="w-3 h-3 flex-shrink-0" /> : <CheckCircle className={`w-3 h-3 flex-shrink-0 ${l.completed ? "text-primary" : "text-muted-foreground/30"}`} />}
                        {l.title}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

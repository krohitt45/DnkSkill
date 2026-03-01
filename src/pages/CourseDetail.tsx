import { useParams, useNavigate } from "react-router-dom";
import { Clock, BookOpen, CheckCircle, ArrowLeft } from "lucide-react";

const courseData: Record<string, { title: string; desc: string; modules: string[]; duration: string }> = {
  fullstack: {
    title: "Full Stack Web Development",
    desc: "Deep dive into the full-stack development process. Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. Build real-world projects and gain hands-on experience.",
    modules: ["HTML & CSS Basics", "JavaScript Fundamentals", "React.js", "Node.js & Express", "MongoDB & Database", "REST APIs", "Authentication & Security", "Deployment"],
    duration: "12 hours",
  },
  cybersecurity: {
    title: "Cyber Security",
    desc: "Build strong foundations in cybersecurity. Learn about network security, ethical hacking, cryptography, and how to protect systems from cyber threats.",
    modules: ["Introduction to Cybersecurity", "Network Security", "Cryptography", "Ethical Hacking", "Web Application Security", "Malware Analysis", "Incident Response", "Security Best Practices"],
    duration: "10 hours",
  },
  ml: {
    title: "Machine Learning",
    desc: "Start building ML models from scratch. Learn data preprocessing, regression, classification, clustering, neural networks, and model evaluation techniques.",
    modules: ["Introduction to ML", "Data Preprocessing", "Linear Regression", "Classification", "Clustering", "Neural Networks", "Model Evaluation", "Real-world Projects"],
    duration: "15 hours",
  },
  dsa: {
    title: "DSA with C++",
    desc: "Master data structures and algorithms with C++. Cover arrays, strings, linked lists, trees, graphs, dynamic programming, and ace your interviews.",
    modules: ["Introduction", "Arrays", "Strings", "Linked List", "Stacks & Queues", "Trees", "Graphs", "Dynamic Programming", "Greedy", "Sorting & Searching"],
    duration: "20 hours",
  },
};

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData[id || ""] || courseData.fullstack;

  return (
    <div className="space-y-6 max-w-3xl">
      <button onClick={() => navigate("/courses")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Back to Courses
      </button>
      <h1 className="text-2xl font-bold text-foreground">{course.title}</h1>
      <p className="text-muted-foreground">{course.desc}</p>
      <div className="flex gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{course.duration}</span>
        <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" />{course.modules.length} Modules</span>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-foreground mb-4">Course Modules</h3>
        <div className="space-y-3">
          {course.modules.map((m, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background">
              <CheckCircle className="w-5 h-5 text-muted-foreground/30" />
              <span className="text-sm font-medium text-foreground">Module {i + 1}: {m}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate("/course-player")}
        className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90"
      >
        Start Learning
      </button>
    </div>
  );
}

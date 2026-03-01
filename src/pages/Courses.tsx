import { useNavigate } from "react-router-dom";
import courseFullstack from "@/assets/course-fullstack.jpg";
import courseCyber from "@/assets/course-cybersecurity.jpg";
import courseMl from "@/assets/course-ml.jpg";
import courseDsa from "@/assets/course-dsa.jpg";

const courses = [
  { id: "fullstack", title: "Full Stack Web Development", desc: "Deep dive into the full-stack development process including frontend and backend technologies.", modules: 8, img: courseFullstack },
  { id: "cybersecurity", title: "Cyber Security", desc: "Strong foundations in cybersecurity, protect systems and networks from threats.", modules: 8, img: courseCyber },
  { id: "ml", title: "Machine Learning", desc: "Start building ML models, learn data preprocessing, model training and evaluation.", modules: 8, img: courseMl },
  { id: "dsa", title: "DSA with C++", desc: "Master data structures and algorithms with C++ for competitive programming and interviews.", modules: 10, img: courseDsa },
];

export default function Courses() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Courses</h1>

      {/* Hero Banner */}
      <div className="rounded-xl bg-gradient-to-r from-[hsl(210,30%,12%)] to-[hsl(170,25%,18%)] p-8 text-white">
        <h2 className="text-2xl font-bold">Master In-Demand <span className="text-primary">Tech Courses</span></h2>
        <h3 className="text-xl font-bold mt-1">for Your Placement Journey</h3>
        <p className="text-sm opacity-80 mt-2">Learn · Practice · Get Certified</p>
        <div className="flex gap-3 mt-3 text-xs">
          <span className="bg-card/10 px-3 py-1 rounded-full">🏢 Live Projects</span>
          <span className="bg-card/10 px-3 py-1 rounded-full">👤 Expert Mentors</span>
          <span className="bg-card/10 px-3 py-1 rounded-full">🎯 Placement Support</span>
        </div>
        <div className="flex gap-3 mt-4">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary/90">Explore All Courses →</button>
          <button className="bg-card/20 text-card px-6 py-2 rounded-full text-sm font-semibold hover:bg-card/30">Summer Training 2026</button>
        </div>
      </div>

      {/* Continue Learning */}
      <h3 className="text-lg font-bold text-foreground">Continue Learning</h3>
      <div className="grid grid-cols-3 gap-4">
        {courses.slice(0, 3).map(c => (
          <div key={c.id} className="bg-card rounded-xl shadow-sm overflow-hidden">
            <img src={c.img} alt={c.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-foreground">{c.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{c.desc}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-muted-foreground font-semibold">0/{c.modules} Modules</span>
                <button
                  onClick={() => navigate(`/course-detail/${c.id}`)}
                  className="bg-primary text-primary-foreground px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-primary/90"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More courses */}
      <div className="grid grid-cols-3 gap-4">
        {courses.slice(3).map(c => (
          <div key={c.id} className="bg-card rounded-xl shadow-sm overflow-hidden">
            <img src={c.img} alt={c.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-foreground">{c.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{c.desc}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-muted-foreground font-semibold">0/{c.modules} Modules</span>
                <button
                  onClick={() => navigate(`/course-detail/${c.id}`)}
                  className="bg-primary text-primary-foreground px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-primary/90"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

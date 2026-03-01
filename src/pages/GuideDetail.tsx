import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const content: Record<string, { title: string; sections: { heading: string; text: string }[] }> = {
  company: {
    title: "Company Preparation",
    sections: [
      { heading: "TCS Preparation Guide", text: "TCS NQT exam covers Verbal Ability, Reasoning, Numerical Ability, and Programming. Focus on practicing aptitude questions daily, solve previous year papers, and learn basic coding concepts in C/C++/Java/Python. The coding section tests logical thinking and basic DSA." },
      { heading: "Infosys Preparation", text: "Infosys recruitment includes InfyTQ certification, online assessment with puzzles, and technical + HR interviews. Practice puzzle-solving, strengthen your programming fundamentals, and prepare DBMS, OS, and networking concepts." },
      { heading: "Wipro & Capgemini", text: "Both companies focus on aptitude, verbal ability, and basic coding. Wipro's NLTH exam includes essay writing. Capgemini has a game-based aptitude round. Practice logical reasoning and basic data structures." },
      { heading: "Product-Based Companies", text: "Product companies like Google, Amazon, Microsoft focus heavily on DSA and system design. Practice LeetCode medium/hard problems, understand time/space complexity, and prepare behavioral questions using STAR method." },
    ],
  },
  interview: {
    title: "Interview Preparation",
    sections: [
      { heading: "Technical Interview Tips", text: "Always think out loud during technical interviews. Start with a brute force approach, then optimize. Discuss time and space complexity. Practice common patterns: sliding window, two pointers, BFS/DFS, dynamic programming." },
      { heading: "DSA Fundamentals", text: "Master arrays, strings, linked lists, stacks, queues, trees, graphs, and dynamic programming. Solve at least 200+ problems across all topics. Focus on understanding patterns rather than memorizing solutions." },
      { heading: "OOPS, DBMS, OS, CN", text: "Prepare the 4 pillars of CS fundamentals. Understand OOP concepts with real examples, learn SQL queries and normalization, study process scheduling and memory management, and know TCP/IP, OSI model, and HTTP protocols." },
      { heading: "Preparation Strategy", text: "Create a 90-day plan: Month 1 - DSA basics and aptitude, Month 2 - Advanced DSA and CS fundamentals, Month 3 - Mock interviews and company-specific preparation. Practice coding daily for at least 2 hours." },
    ],
  },
  roadmap: {
    title: "Placement Roadmap",
    sections: [
      { heading: "3 Month Plan", text: "Week 1-4: Strengthen DSA fundamentals (Arrays, Strings, Linked List). Week 5-8: Advanced DSA (Trees, Graphs, DP) + CS subjects. Week 9-12: Mock interviews, company-specific prep, resume building, and applying." },
      { heading: "6 Month Plan", text: "Month 1-2: Programming fundamentals and basic DSA. Month 3-4: Advanced DSA and competitive programming. Month 5: CS fundamentals (DBMS, OS, CN, OOP). Month 6: Projects, resume, mock interviews, and applications." },
      { heading: "Off-Campus Guide", text: "Monitor job portals (LinkedIn, Naukri, AngelList). Follow company career pages. Participate in hiring challenges on HackerRank, CodeChef. Network with professionals and alumni. Prepare a strong GitHub profile with projects." },
      { heading: "Preparation Strategy", text: "Set daily targets for problem-solving. Join study groups for accountability. Attend webinars and tech talks. Build 2-3 strong projects. Practice mock interviews weekly. Stay updated with tech trends." },
    ],
  },
  resume: {
    title: "Resume Building",
    sections: [
      { heading: "Resume Templates", text: "Use clean, ATS-friendly templates. Recommended: Jake's Resume template (LaTeX), Canva templates, or Overleaf. Keep it single page for freshers. Use consistent formatting and professional fonts." },
      { heading: "ATS Friendly Tips", text: "Use standard section headings (Education, Experience, Skills, Projects). Avoid tables, graphics, and headers/footers. Use keywords from job descriptions. Save as PDF. Use standard fonts like Arial or Calibri." },
      { heading: "Projects & Skills", text: "Include 2-3 impactful projects with descriptions using the PAR method (Problem, Action, Result). List relevant technical skills grouped by category. Quantify achievements wherever possible (e.g., 'Reduced load time by 40%')." },
    ],
  },
  softskills: {
    title: "Soft Skills",
    sections: [
      { heading: "Communication Tips", text: "Practice structured responses using the STAR method. Improve vocabulary by reading daily. Record yourself answering common questions. Join public speaking clubs. Practice group discussions with peers." },
      { heading: "Body Language", text: "Maintain eye contact during interviews. Use confident hand gestures. Sit upright with open posture. Smile naturally. Avoid crossing arms or fidgeting. Practice power poses before interviews to boost confidence." },
      { heading: "Confidence Building", text: "Prepare thoroughly - preparation breeds confidence. Practice mock interviews. Celebrate small wins. Visualize success. Learn from rejections. Build a support network. Stay physically active and maintain work-life balance." },
    ],
  },
};

export default function GuideDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const guide = content[id || ""] || content.company;

  return (
    <div className="space-y-6 max-w-3xl">
      <button onClick={() => navigate("/guide")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Back to Career Hub
      </button>
      <h1 className="text-2xl font-bold text-foreground">{guide.title}</h1>
      <div className="space-y-4">
        {guide.sections.map(s => (
          <div key={s.heading} className="bg-card rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-foreground text-lg mb-2">{s.heading}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

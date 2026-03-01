import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, GraduationCap, Code2, Terminal,
  FileText, Award, HelpCircle, LogOut, PanelLeftClose, PanelLeftOpen, Power
} from "lucide-react";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "My Learning", icon: BookOpen, path: "/my-learning", matchPaths: ["/my-learning", "/course-player"] },
  { label: "Courses", icon: GraduationCap, path: "/courses", matchPaths: ["/courses", "/course-detail"] },
  { label: "Practice", icon: Code2, path: "/practice" },
  { label: "Compiler", icon: Terminal, path: "/compiler" },
  { label: "Guide", icon: FileText, path: "/guide", matchPaths: ["/guide"] },
  { label: "Certificate", icon: Award, path: "/certificate" },
];

const bottomItems = [
  { label: "Support", icon: HelpCircle, path: "/support" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (item: typeof navItems[0]) => {
    const paths = item.matchPaths || [item.path];
    return paths.some(p => location.pathname.startsWith(p));
  };

  const handleLogout = () => {
    setShowLogout(false);
    navigate("/login");
  };

  return (
    <>
      <aside className={`${collapsed ? "w-16" : "w-52"} bg-sidebar text-sidebar-foreground flex flex-col h-screen transition-all duration-200 flex-shrink-0`}>
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-4">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center flex-shrink-0">
            <Code2 className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && <span className="font-bold text-sm tracking-wide text-sidebar-foreground">DNK SKILLS</span>}
          <button onClick={() => setCollapsed(!collapsed)} className="ml-auto text-sidebar-foreground/60 hover:text-sidebar-foreground">
            {collapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 flex flex-col gap-1 px-2 mt-2">
          {navItems.map(item => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(item)
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-2 pb-4 flex flex-col gap-1">
          {bottomItems.map(item => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(item as any)
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
          <button
            onClick={() => setShowLogout(true)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Logout Dialog */}
      <AlertDialog open={showLogout} onOpenChange={setShowLogout}>
        <AlertDialogContent className="bg-card">
          <AlertDialogHeader className="items-center">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-2">
              <Power className="w-8 h-8 text-destructive" />
            </div>
            <AlertDialogTitle className="text-xl">Confirm Logout</AlertDialogTitle>
            <AlertDialogDescription>Are you sure you want to logout?</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex gap-3 sm:justify-center">
            <AlertDialogCancel className="bg-secondary text-secondary-foreground">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

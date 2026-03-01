import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import MyLearning from "./pages/MyLearning";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Practice from "./pages/Practice";
import Compiler from "./pages/Compiler";
import Guide from "./pages/Guide";
import GuideDetail from "./pages/GuideDetail";
import Certificate from "./pages/Certificate";
import Support from "./pages/Support";
import CoursePlayer from "./pages/CoursePlayer";
import Login from "./pages/Login";
import ActivityOverview from "./pages/ActivityOverview";
import TodayHomework from "./pages/TodayHomework";
import WeeklyTest from "./pages/WeeklyTest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-learning" element={<MyLearning />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course-detail/:id" element={<CourseDetail />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/compiler" element={<Compiler />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/guide/:id" element={<GuideDetail />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/support" element={<Support />} />
            <Route path="/course-player" element={<CoursePlayer />} />
            <Route path="/activity-overview" element={<ActivityOverview />} />
            <Route path="/today-homework" element={<TodayHomework />} />
            <Route path="/weekly-test" element={<WeeklyTest />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

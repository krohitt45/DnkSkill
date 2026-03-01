import { useState } from "react";
import { Download, Share2, Search, CheckCircle, X } from "lucide-react";

export default function Certificate() {
  const [showShare, setShowShare] = useState(false);

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 560;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#faf8f0";
    ctx.fillRect(0, 0, 800, 560);
    ctx.strokeStyle = "#b8860b";
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, 760, 520);
    ctx.strokeRect(30, 30, 740, 500);
    ctx.fillStyle = "#1a2332";
    ctx.font = "bold 24px serif";
    ctx.textAlign = "center";
    ctx.fillText("DNK SKILLS", 400, 80);
    ctx.fillStyle = "#2e7d32";
    ctx.font = "14px sans-serif";
    ctx.fillText("✓ Verified Certificate", 400, 110);
    ctx.fillStyle = "#333";
    ctx.font = "italic 16px serif";
    ctx.fillText("This is to certify that", 400, 160);
    ctx.font = "bold 28px serif";
    ctx.fillText("ROHIT KUMAR", 400, 200);
    ctx.font = "italic 16px serif";
    ctx.fillText("has successfully completed", 400, 240);
    ctx.fillStyle = "#2e7d32";
    ctx.font = "bold 18px serif";
    ctx.fillText("DATA STRUCTURES & ALGORITHMS WITH C++", 400, 280);
    ctx.fillStyle = "#333";
    ctx.font = "italic 14px serif";
    ctx.fillText("with distinction", 400, 310);
    ctx.font = "12px sans-serif";
    ctx.fillText("Certificate ID: DNK-DSA-2026-00451", 400, 350);
    ctx.font = "bold 14px serif";
    ctx.fillText("25 June 2026", 400, 400);
    const link = document.createElement("a");
    link.download = "DNK-SKILLS-Certificate.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Certificate</h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>Certificate ID: DNK-DSA-2026-00451</span>
          <Search className="w-4 h-4" />
        </div>
      </div>

      {/* Certificate Display */}
      <div className="bg-card rounded-xl shadow-sm p-8 max-w-2xl mx-auto">
        <div className="border-4 border-[hsl(40,60%,60%)] p-2">
          <div className="border-2 border-[hsl(40,60%,70%)] p-8 text-center bg-[hsl(45,50%,96%)]">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">&lt;/&gt;</div>
              <span className="font-bold text-foreground text-lg">DNK SKILLS</span>
              <span className="flex items-center gap-1 text-primary text-sm ml-4"><CheckCircle className="w-4 h-4" /> Verified Certificate</span>
            </div>
            <p className="italic text-muted-foreground text-sm">This is to certify that</p>
            <h2 className="text-2xl font-bold text-foreground my-2">ROHIT KUMAR</h2>
            <p className="italic text-muted-foreground text-sm">has successfully completed</p>
            <h3 className="text-primary font-bold mt-2">DATA STRUCTURES & ALGORITHMS WITH C++</h3>
            <p className="italic text-muted-foreground text-sm mt-1">with distinction</p>
            <p className="text-xs text-muted-foreground mt-4">Certificate ID: DNK-DSA-2026-00451</p>
            <div className="flex items-center justify-center gap-16 mt-6">
              <div className="text-center">
                <p className="font-serif italic text-foreground">Rahul Verma</p>
                <p className="text-xs text-muted-foreground">Instructor</p>
              </div>
              <p className="font-semibold text-foreground">25 June 2026</p>
              <div className="text-center">
                <p className="font-serif italic text-foreground">Deepak Das</p>
                <p className="text-xs text-muted-foreground">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Issued on: <span className="font-semibold text-foreground">25 June 2026</span> · Lifetime Valid
      </div>

      <div className="flex justify-center gap-4">
        <button onClick={handleDownload} className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90">
          <Download className="w-4 h-4" /> Download PDF
        </button>
        <button onClick={() => setShowShare(true)} className="flex items-center gap-2 bg-card text-foreground px-6 py-2.5 rounded-lg font-semibold text-sm border border-border hover:bg-secondary">
          <Share2 className="w-4 h-4" /> Share
        </button>
      </div>

      {/* Share Dialog */}
      {showShare && (
        <div className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-50" onClick={() => setShowShare(false)}>
          <div className="bg-card rounded-xl p-6 shadow-lg w-80" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">Share Certificate</h3>
              <button onClick={() => setShowShare(false)}><X className="w-5 h-5 text-muted-foreground" /></button>
            </div>
            <div className="space-y-2">
              {["LinkedIn", "Twitter / X", "Facebook", "WhatsApp", "Copy Link"].map(p => (
                <button key={p} onClick={() => { setShowShare(false); }} className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-secondary text-sm font-medium text-foreground">
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

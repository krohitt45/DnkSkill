import { useState } from "react";
import { Mail, MessageCircle, Send, X, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ from: string; text: string }[]>([
    { from: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [chatInput, setChatInput] = useState("");

  const handleSend = () => {
    if (!name || !email || !subject) return;
    setShowSuccess(true);
    setName(""); setEmail(""); setSubject("");
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { from: "user", text: chatInput }]);
    setChatInput("");
    setTimeout(() => {
      setChatMessages(prev => [...prev, { from: "bot", text: "Thank you for your message! Our team will connect with you soon." }]);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Support Center</h1>
        <span className="text-sm text-muted-foreground border border-border px-3 py-1 rounded-lg">Response Time: Within 24 Hours</span>
      </div>
      <p className="text-foreground">We're here to help you 🚀</p>
      <p className="text-sm text-muted-foreground">Response Time: Within 24 Hours</p>

      <div className="grid grid-cols-2 gap-6">
        {/* Contact Form */}
        <div className="bg-card rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-foreground text-lg">Contact Us</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-foreground">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Subject</label>
              <textarea value={subject} onChange={e => setSubject(e.target.value)} placeholder="Message" rows={3} className="w-full mt-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
            <button onClick={handleSend} className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Send Message
            </button>
            <p className="text-xs text-muted-foreground text-center">Our team will respond within 24 hours.</p>
          </div>
        </div>

        {/* Live Chat */}
        <div className="bg-card rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-foreground text-lg">Live Chat Support</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Chat with our support team instantly.</p>

          {!showChat ? (
            <div className="bg-background rounded-xl p-6 text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-bold text-foreground">Start Chat</h4>
              <p className="text-sm text-muted-foreground mb-4">Chat with our support team instantly.</p>
              <button onClick={() => setShowChat(true)} className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90">
                Start Chat
              </button>
              <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary" /> Online Status: Agents Available
              </p>
            </div>
          ) : (
            <div className="bg-background rounded-xl flex flex-col h-64">
              <div className="flex-1 p-3 overflow-y-auto space-y-2">
                {chatMessages.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${m.from === "user" ? "bg-primary text-primary-foreground" : "bg-card text-foreground border border-border"}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 p-3 border-t border-border">
                <input value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleChatSend()} placeholder="Type a message..." className="flex-1 px-3 py-2 rounded-lg border border-border bg-card text-foreground text-sm outline-none" />
                <button onClick={handleChatSend} className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="font-bold text-foreground text-lg mb-3">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="bg-card rounded-xl shadow-sm">
          {[
            { q: "How to download certificate?", a: "Go to the Certificate page and click the Download PDF button. Your certificate will be downloaded as a PNG image." },
            { q: "How to reset my password?", a: "Click on 'Forgot Password' on the login page. Enter your registered email and follow the instructions sent to your inbox." },
            { q: "How to access weekly test?", a: "Go to Dashboard and click 'Start Test' in the Skill Builder Zone. Tests are available every Sunday at 2:00 PM." },
            { q: "How to contact support?", a: "You can use the contact form on this page or start a live chat with our support team. We respond within 24 hours." },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="px-4 text-sm">{faq.q}</AccordionTrigger>
              <AccordionContent className="px-4 text-sm text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-xl p-6 shadow-lg text-center max-w-sm">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Send className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground text-lg">Message Sent!</h3>
            <p className="text-sm text-muted-foreground mt-2">We will connect with you soon.</p>
            <button onClick={() => setShowSuccess(false)} className="mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold">OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";

const templates: Record<string, string> = {
  Java: `public class Solution {\n    {\n        public static void main(String[] args) {\n            // Write your code here\n            System.out.println("Hello, World!");\n        }\n    }\n}`,
  C: `#include <stdio.h>\n\nint main() {\n    // Write your code here\n    printf("Hello, World!\\n");\n    return 0;\n}`,
  "C++": `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your code here\n    cout << "Hello, World!" << endl;\n    return 0;\n}`,
  Python: `# Write your code here\nprint("Hello, World!")`,
};

const outputs: Record<string, string> = {
  Java: "Hello, World!",
  C: "Hello, World!",
  "C++": "Hello, World!",
  Python: "Hello, World!",
};

export default function Compiler() {
  const [lang, setLang] = useState("Java");
  const [code, setCode] = useState(templates.Java);
  const [output, setOutput] = useState("");

  const switchLang = (l: string) => {
    setLang(l);
    setCode(templates[l]);
    setOutput("");
  };

  return (
    <div className="space-y-4 h-full flex flex-col">
      <h1 className="text-2xl font-bold text-foreground">Compiler</h1>

      {/* Language Tabs */}
      <div className="flex gap-2">
        {Object.keys(templates).map(l => (
          <button
            key={l}
            onClick={() => switchLang(l)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              lang === l ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-secondary"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Code Editor */}
      <div className="flex-1 flex flex-col bg-[hsl(215,28%,17%)] rounded-xl overflow-hidden min-h-0">
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
          className="flex-1 bg-transparent text-[hsl(45,100%,90%)] p-4 font-mono text-sm resize-none outline-none min-h-[200px]"
          spellCheck={false}
        />
        {/* Output */}
        <div className="border-t border-[hsl(215,25%,25%)]">
          <div className="px-4 py-2 text-sm font-semibold text-primary">Output</div>
          <div className="px-4 pb-4 text-sm font-mono text-[hsl(45,100%,90%)] min-h-[80px]">
            {output}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={() => setOutput(outputs[lang])}
          className="bg-card text-foreground px-8 py-2.5 rounded-lg font-semibold text-sm hover:bg-secondary border border-border"
        >
          Run
        </button>
        <button
          onClick={() => { setCode(templates[lang]); setOutput(""); }}
          className="bg-primary text-primary-foreground px-8 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

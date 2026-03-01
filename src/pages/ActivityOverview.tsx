import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Dec","Dec"];
const days = ["Sun","Mon","Tue","Wed","Thu","Fri"];

const heatmapData = days.map(day =>
  months.map(month => ({ day, month, value: Math.floor(Math.random() * 8) }))
);

const lineData = months.map((m, i) => ({ name: m, solved: Math.floor(Math.random() * 6) + (i > 8 ? 4 : 2) }));

const getColor = (v: number) => {
  if (v === 0) return "hsl(var(--muted))";
  if (v <= 2) return "hsl(130 30% 75%)";
  if (v <= 5) return "hsl(140 40% 55%)";
  return "hsl(150 50% 35%)";
};

export default function ActivityOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground italic">Activity Overview</h1>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 shadow-sm flex items-center gap-3">
          <span className="text-2xl">🎯</span>
          <div>
            <p className="text-sm text-muted-foreground">Total Active Days:</p>
            <p className="text-2xl font-bold text-foreground">142</p>
          </div>
        </div>
        <div className="bg-card rounded-xl p-5 shadow-sm flex items-center gap-3">
          <span className="text-2xl">🔥</span>
          <div>
            <p className="text-sm text-muted-foreground">Current Streak:</p>
            <p className="text-2xl font-bold text-foreground">12 Days</p>
          </div>
        </div>
        <div className="bg-card rounded-xl p-5 shadow-sm flex items-center gap-3">
          <span className="text-2xl">🏆</span>
          <div>
            <p className="text-sm text-muted-foreground">Longest Streak:</p>
            <p className="text-2xl font-bold text-foreground">25</p>
          </div>
        </div>
      </div>

      {/* Heatmap */}
      <div className="bg-card rounded-xl p-6 shadow-sm">
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex gap-1 mb-2 ml-12">
              {months.map((m, i) => <span key={i} className="text-xs text-muted-foreground flex-1 text-center">{m}</span>)}
            </div>
            {heatmapData.map((row, ri) => (
              <div key={ri} className="flex items-center gap-1 mb-1">
                <span className="text-xs text-muted-foreground w-10 text-right mr-2">{row[0].day}</span>
                {row.map((cell, ci) => (
                  <div
                    key={ci}
                    className="flex-1 aspect-square rounded-sm min-w-[18px] max-w-[28px]"
                    title={`${cell.day}, ${cell.month}: ${cell.value} Problems`}
                    style={{ backgroundColor: getColor(cell.value) }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground justify-center">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(var(--muted))" }} /> No Activity</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(130 30% 75%)" }} /> 1-2 Problems</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(140 40% 55%)" }} /> 3-5 Problems</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(150 50% 35%)" }} /> 6+ Problems</span>
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-card rounded-xl p-6 shadow-sm">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "hsl(210 30% 15%)", border: "none", borderRadius: "8px", color: "white" }}
              labelStyle={{ color: "white" }}
            />
            <Line type="monotone" dataKey="solved" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))", r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground justify-center">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(var(--muted))" }} /> No Activity</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(130 30% 75%)" }} /> 1-2 Problems</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(140 40% 55%)" }} /> 3-5 Problems</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(150 50% 35%)" }} /> 6+ Problems</span>
        </div>
      </div>
    </div>
  );
}

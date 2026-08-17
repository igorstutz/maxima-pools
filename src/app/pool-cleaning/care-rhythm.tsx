"use client";

import { useState } from "react";
import {
  BadgeCheck,
  Brush,
  CalendarCheck,
  CalendarDays,
  ClipboardCheck,
  Droplets,
  Eye,
  Filter,
  FlaskConical,
  Gauge,
  Shield,
  Snowflake,
  Sparkles,
  SprayCan,
  Sun,
  TestTube,
  Thermometer,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Icons referenced by name from the editable content file.
const icons: Record<string, LucideIcon> = {
  BadgeCheck, Brush, CalendarCheck, CalendarDays, ClipboardCheck, Droplets,
  Eye, Filter, FlaskConical, Gauge, Shield, Snowflake, Sparkles, SprayCan,
  Sun, TestTube, Thermometer, Waves, Wrench, Zap,
};

interface Task {
  icon: string;
  title: string;
  description: string;
}

interface Timeframe {
  id: string;
  label: string;
  icon: string;
  cadence: string;
  title: string;
  description: string;
  tasks: Task[];
}

export function CareRhythm({ timeframes }: { timeframes: Timeframe[] }) {
  const [activeId, setActiveId] = useState(timeframes[0].id);
  const active = timeframes.find((t) => t.id === activeId) ?? timeframes[0];
  const ActiveIcon = icons[active.icon];

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        {timeframes.map((tf) => {
          const isActive = tf.id === activeId;
          const TabIcon = icons[tf.icon];
          return (
            <button
              key={tf.id}
              onClick={() => setActiveId(tf.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-lg shadow-accent/25"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-accent/30 hover:text-primary hover:shadow-md"
              }`}
            >
              {TabIcon && <TabIcon size={16} />}
              {tf.label}
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-7 sm:p-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center shrink-0">
                {ActiveIcon && <ActiveIcon size={20} className="text-accent" />}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {active.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{active.description}</p>
          </div>
          <span className="inline-flex items-center self-start gap-2 whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/15 rounded-full px-4 py-2">
            {active.cadence}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {active.tasks.map((task) => {
            const TaskIcon = icons[task.icon];
            return (
              <div
                key={task.title}
                className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-5 hover:shadow-md hover:border-accent/20 transition-all duration-500"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform duration-500">
                  {TaskIcon && <TaskIcon size={17} className="text-accent" />}
                </div>
                <h4 className="font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors">
                  {task.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {task.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

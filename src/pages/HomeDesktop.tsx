import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { CalendarSection } from "../components/organisms/CalendarSection";
import { TaskList } from "../components/organisms/TaskList";
import { InputBar } from "../components/molecules/InputBar";
import { useAppData } from "../hooks/useAppData";

export const HomeDesktop: React.FC = () => {
  const { tasks, events, toggleTask, addTask, connectCalendar } = useAppData();

  const today = new Date();
  const date = {
    month: today.toLocaleDateString('es-ES', { month: 'short' }).toUpperCase(),
    day: today.getDate(),
  };

  return (
    <MainLayout activeNavId="home">
      <div className="h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto px-12 py-10">
          {/* Greeting */}
          <h1 className="font-display text-[40px] leading-[52px] font-bold mb-8">
            Buenos días, Roger
          </h1>

          {/* Calendar Section */}
          <section className="mb-8">
            <h2 className="font-sans text-[18px] leading-[26px] font-medium mb-4">Calendario</h2>
            <CalendarSection
              date={date}
              events={events}
              onConnectCalendar={connectCalendar}
            />
          </section>

          {/* Tasks Section */}
          <section className="mb-8">
            <h2 className="font-sans text-[18px] leading-[26px] font-medium mb-4">Tareas</h2>
            <div className="bg-bg-surface rounded-2xl p-4">
              <TaskList 
                tasks={tasks}
                onToggleTask={toggleTask}
              />
            </div>
          </section>

          {/* Input Bar */}
          <div className="max-w-2xl">
            <InputBar 
              placeholder="Agregar tarea"
              onSubmit={addTask}
              actionButton={
                <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-surfaceAlt hover:bg-bg-surface transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-text-primary">
                    <line x1="8" y1="3" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="3" y1="8" x2="13" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              }
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

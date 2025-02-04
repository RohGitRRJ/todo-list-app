import { CreateTask } from "@/components/create-task";
import { TaskList } from "@/components/task-list";
import { NotificationPanel } from "@/components/notification-panel";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Todo List</h1>
          <ThemeToggle />
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Tasks</h2>
          <CreateTask />
        </div>
        <TaskList />
      </div>
      <NotificationPanel />
    </div>
  );
}
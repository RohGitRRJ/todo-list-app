import { CreateTask } from "@/components/create-task";
import { TaskList } from "@/components/task-list";
import { NotificationPanel } from "@/components/notification-panel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Tasks</h1>
          <CreateTask />
        </div>
        <TaskList />
      </div>
      <NotificationPanel />
    </div>
  );
}

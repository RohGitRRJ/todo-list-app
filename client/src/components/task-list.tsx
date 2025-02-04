import { useQuery } from "@tanstack/react-query";
import { TaskItem } from "./task-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SelectTask } from "@db/schema";

export function TaskList() {
  const { data: tasks, isLoading } = useQuery<SelectTask[]>({
    queryKey: ['/api/tasks']
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-20 bg-gray-100 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  const filterTasks = (priority: number | null) => {
    return tasks?.filter(task => !priority || task.priority === priority) || [];
  };

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="low">Low</TabsTrigger>
        <TabsTrigger value="medium">Medium</TabsTrigger>
        <TabsTrigger value="high">High</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-6 space-y-4">
        {filterTasks(null).map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </TabsContent>
      <TabsContent value="low" className="mt-6 space-y-4">
        {filterTasks(1).map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </TabsContent>
      <TabsContent value="medium" className="mt-6 space-y-4">
        {filterTasks(2).map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </TabsContent>
      <TabsContent value="high" className="mt-6 space-y-4">
        {filterTasks(3).map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </TabsContent>
    </Tabs>
  );
}

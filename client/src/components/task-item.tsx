import { SelectTask } from "@db/schema";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TaskItemProps {
  task: SelectTask;
}

const priorityColors = {
  1: "bg-blue-100 text-blue-800",
  2: "bg-yellow-100 text-yellow-800",
  3: "bg-red-100 text-red-800"
};

const priorityLabels = {
  1: "Low",
  2: "Medium",
  3: "High"
};

export function TaskItem({ task }: TaskItemProps) {
  const queryClient = useQueryClient();

  const toggleComplete = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("PATCH", `/api/tasks/${task.id}`, {
        completed: !task.completed
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/tasks'] });
    }
  });

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
    >
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => toggleComplete.mutate()}
        disabled={toggleComplete.isPending}
      />
      <div className="flex-1">
        <h3 className={cn(
          "font-medium",
          task.completed && "line-through text-gray-500"
        )}>
          {task.title}
        </h3>
        {task.description && (
          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
        )}
      </div>
      <Badge className={priorityColors[task.priority as keyof typeof priorityColors]}>
        {priorityLabels[task.priority as keyof typeof priorityLabels]}
      </Badge>
    </motion.div>
  );
}

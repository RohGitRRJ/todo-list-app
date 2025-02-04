import { useEffect, useState } from "react";
import { addNotificationListener, connectWebSocket } from "@/lib/websocket";
import { SelectTask } from "@db/schema";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function NotificationPanel() {
  const [notifications, setNotifications] = useState<SelectTask[]>([]);

  useEffect(() => {
    connectWebSocket();
    
    const removeListener = addNotificationListener((data) => {
      if (data.type === 'notification') {
        setNotifications(prev => [data.task, ...prev].slice(0, 5));
      }
    });

    return removeListener;
  }, []);

  return (
    <div className="fixed bottom-4 right-4 w-80 space-y-2">
      <AnimatePresence>
        {notifications.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.2 }}
          >
            <Alert className="bg-background border-primary">
              <Bell className="h-4 w-4 text-primary" />
              <AlertTitle>High Priority Task</AlertTitle>
              <AlertDescription>{task.title}</AlertDescription>
            </Alert>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
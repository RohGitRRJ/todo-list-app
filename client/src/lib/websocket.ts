let socket: WebSocket | null = null;
const listeners = new Set<(data: any) => void>();

export function connectWebSocket() {
  if (socket) return;

  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const wsUrl = `${protocol}//${window.location.host}/ws`;
  
  socket = new WebSocket(wsUrl);
  
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    listeners.forEach(listener => listener(data));
  };

  socket.onclose = () => {
    socket = null;
    // Reconnect after 1s
    setTimeout(connectWebSocket, 1000);
  };
}

export function addNotificationListener(callback: (data: any) => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

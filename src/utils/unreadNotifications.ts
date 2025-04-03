interface Notification {
  senderId: string;
  text: string;
  isRead: boolean;
  // Add other notification properties as needed
}

export const unreadNotificationsFunc = (notifications: Notification[]) => {
  return notifications.filter((n) => n.isRead === false);
};

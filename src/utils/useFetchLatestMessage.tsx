import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { baseUrl, getRequest } from "./services";


interface Chat {
  _id: string;
  // add other properties if needed
}

export const useFetchLatestMessage = (chat: Chat) => {
  const chatContext = useContext(ChatContext);
  const newMessage = chatContext?.messages;

  const [latestMessage, setLatestMessage] = useState(null);

  useEffect(() => {
    const getMessages = async () => {
      const response = await getRequest(`${baseUrl}/messages/${chat?._id}`);

      if (response.error) {
        return console.log("Error getting message...", response.message);
      }

      const lastMessage = response[response?.length - 1];

      setLatestMessage(lastMessage);
    };
    getMessages();
  }, [newMessage, notifications]);

  return { latestMessage };
};

import { useAxios } from "@/lib/hooks";

import { createChat, deleteChat, getChats } from "./chat";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useChatApi = () => {
  const { axiosInstance } = useAxios();

  return {
    createChat: async (chatName: string) => createChat(chatName, axiosInstance),
    getChats: async () => getChats(axiosInstance),
    deleteChat: async (chatId: string) => deleteChat(chatId, axiosInstance),
  };
};
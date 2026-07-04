import { prisma } from "../../lib/prisma";
import type { IMessage } from "./message.interface";

const messageIntoDB = async (payload: IMessage) => {
  const result = await prisma.message.create({
    data: {
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      isRead: payload.isRead ?? false,
    },
  });

  return result;
};

const getAllMessages = async () => {
  const result = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return result;
};

const getSingleMessage = async (id: string) => {
  const result = await prisma.message.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateMessage = async (
  id: string,
  payload: Partial<IMessage>
) => {
  const result = await prisma.message.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteMessage = async (id: string) => {
  const result = await prisma.message.delete({
    where: {
      id,
    },
  });

  return result;
};

export const messageService = {
  messageIntoDB,
  getAllMessages,
  getSingleMessage,
  updateMessage,
  deleteMessage,
};
import { prisma } from "../../lib/prisma";
import type { ISkill } from "./skill.interface";

const skillIntoDB = async (payload: ISkill) => {
  const result = await prisma.skill.create({
    data: {
      name: payload.name,
      category: payload.category,
      icon: payload.icon,
    },
  });

  return result;
};

const getAllSkills = async () => {
  const result = await prisma.skill.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return result;
};

const getSingleSkill = async (id: string) => {
  const result = await prisma.skill.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateSkill = async (
  id: string,
  payload: Partial<ISkill>
) => {
  const result = await prisma.skill.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteSkill = async (id: string) => {
  const result = await prisma.skill.delete({
    where: {
      id,
    },
  });

  return result;
};

export const skillService = {
  skillIntoDB,
  getAllSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
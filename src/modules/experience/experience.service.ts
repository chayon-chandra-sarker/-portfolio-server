import { prisma } from "../../lib/prisma";
import type { IExperience } from "./experience.interface";

const experienceIntoDB = async (payload: IExperience) => {
  const result = await prisma.experience.create({
    data: {
      company: payload.company,
      position: payload.position,
      startDate: payload.startDate,
      endDate: payload.endDate,
      isCurrent: payload.isCurrent ?? false,
      description: payload.description,
      companyLogo: payload.companyLogo,
      location: payload.location,
    },
  });

  return result;
};

const getAllExperiences = async () => {
  const result = await prisma.experience.findMany({
    orderBy: {
      startDate: "desc",
    },
  });

  return result;
};

const getSingleExperience = async (id: string) => {
  const result = await prisma.experience.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateExperience = async (
  id: string,
  payload: Partial<IExperience>
) => {
  const result = await prisma.experience.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteExperience = async (id: string) => {
  const result = await prisma.experience.delete({
    where: {
      id,
    },
  });

  return result;
};

export const experienceService = {
  experienceIntoDB,
  getAllExperiences,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};
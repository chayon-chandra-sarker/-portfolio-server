import { prisma } from "../../lib/prisma";
import type { IProject } from "./project.interface";


const projectIntoDB = async (payload: IProject) => {
  const result = await prisma.project.create({
    data: {
      title: payload.title,
      slug: payload.slug,
      description: payload.description,
      image: payload.image,
      githubUrl: payload.githubUrl,
      liveUrl: payload.liveUrl,
      technology: payload.technology,
      featured: payload.featured,
    },
  });

  return result;
};

const getAllProjects = async () => {
  const result = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return result;
};

const getSingleProject = async (id: string) => {
  const result = await prisma.project.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateProject = async (id: string, payload: Partial<IProject>) => {
  const result = await prisma.project.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteProject = async (id: string) => {
  const result = await prisma.project.delete({
    where: {
      id,
    },
  });

  return result;
};

export const projectService = {
  projectIntoDB,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
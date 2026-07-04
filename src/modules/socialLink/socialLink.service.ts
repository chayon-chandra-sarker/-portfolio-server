import { prisma } from "../../lib/prisma";
import type { ISocialLink } from "./socialLink.interface";

const socialLinkIntoDB = async (payload: ISocialLink) => {
  const result = await prisma.socialLink.create({
    data: {
      github: payload.github,
      linkedin: payload.linkedin,
      facebook: payload.facebook,
      email: payload.email,
    },
  });

  return result;
};

const getAllSocialLinks = async () => {
  const result = await prisma.socialLink.findMany();

  return result;
};

const getSingleSocialLink = async (id: string) => {
  const result = await prisma.socialLink.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateSocialLink = async (
  id: string,
  payload: Partial<ISocialLink>
) => {
  const result = await prisma.socialLink.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteSocialLink = async (id: string) => {
  const result = await prisma.socialLink.delete({
    where: {
      id,
    },
  });

  return result;
};

export const socialLinkService = {
  socialLinkIntoDB,
  getAllSocialLinks,
  getSingleSocialLink,
  updateSocialLink,
  deleteSocialLink,
};
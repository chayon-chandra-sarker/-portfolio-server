import config from "../../config";
import { prisma } from "../../lib/prisma";
import type { registerUserPayload } from "./user.interface";
import bcrypt from "bcrypt";

const registerIntoDB = async (payload: registerUserPayload) => {
  const { name, email, password } = payload;
  const isUserExist = await prisma.user.findUnique({
    where: { email },
  });
  if (isUserExist) {
    throw new Error("user with this email already exist");
  }
  const hashedPassword = await bcrypt.hash(
    password,Number(config.bcrypt_salt_rounds),
  );
const createdUser = await prisma.user.create({
    data:{
        name,
        email,
        password:hashedPassword
    }
    
});
const user = await prisma.user.findUnique({
    where:{
      id: createdUser.id,
      email: createdUser.email || email
    },
    omit:{
      password:true
    }

});
return user;

};

export const userService = {
    registerIntoDB,
}


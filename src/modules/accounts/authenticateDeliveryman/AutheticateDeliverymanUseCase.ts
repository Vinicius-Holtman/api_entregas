import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    })

    if (!deliveryman) {
      throw new Error("Username or password invalid!")
    }

    const passwordMatch = await compare(password, deliveryman.password)

    if(!passwordMatch) {
      throw new Error("Username or password invalid!")
    }

    const token = sign({ username }, "6bf629fcac0d6c98e635915aafbd43f5", {
      subject: deliveryman.id,
      expiresIn: "1d"
    })

    return {
      token: token
    }
  }
}

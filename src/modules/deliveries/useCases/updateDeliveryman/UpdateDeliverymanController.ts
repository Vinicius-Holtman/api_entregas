import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";



export class UpdateDeliverymanController {
  async handle(req: Request, res: Response) {
    const { id_deliveryman } = req
    const { id } = req.params

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase()
    const delivery = await updateDeliverymanUseCase.execute({
      id_deliveryman,
      id_delivery: id
    })

    return res.json(delivery)
  }
}
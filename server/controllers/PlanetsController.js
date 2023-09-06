import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";


export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .post('', this.createPlanet)
  }
  async createPlanet(response, request, next) {
    try {
      const body = request.body

      const newPlanet = await planetsService.createPlanet(body)

      response.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }

}
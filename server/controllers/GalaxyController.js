import { galaxyService } from "../services/GalaxyService.js";
import BaseController from "../utils/BaseController.js";





export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxy')
    this.router
      .post('', this.createGalaxy)
      .get('', this.getGalaxy)
      .put('/:galaxyId', this.editGalaxy)

    // going to make a get where we can get planets according to what galaxy they are in.

    // .get('/:galaxy/planets')
  }

  async createGalaxy(request, response, next) {
    try {
      const body = request.body
      const newGalaxy = await galaxyService.createGalaxy(body)
      response.send(newGalaxy)

    } catch (error) {
      next(error)
    }
  }

  async getGalaxy(request, response, next) {
    try {
      const query = request.query
      const getGalaxy = await galaxyService.getGalaxy(query)
      response.send(getGalaxy)
    } catch (error) {
      next(error)
    }
  }


  async editGalaxy(request, response, next) {
    try {
      const updates = request.body
      const galaxyId = request.params.galaxyId
      const editedGalaxy = await galaxyService.editGalaxy(galaxyId, updates)

      response.send(editedGalaxy)
    } catch (error) {
      next(error)
    }
  }



}
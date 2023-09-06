import { dbContext } from "../db/DbContext.js"



class GalaxyService {
  async createGalaxy(body) {
    const newGalaxy = await dbContext.Galaxy.create(body)
    return newGalaxy
  }

  async getGalaxy(query) {
    const galaxy = await dbContext.Galaxy.find(query)
    return galaxy
  }
}



export const galaxyService = new GalaxyService()
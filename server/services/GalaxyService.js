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

  async editGalaxy(galaxyId, updates) {
    const originalGalaxy = await dbContext.Galaxy.findById(galaxyId)

    if (!originalGalaxy) throw new Error(`Unable to find galaxy with id: ${galaxyId}`)

    originalGalaxy.name = updates.name || originalGalaxy.name
    originalGalaxy.type = updates.type || originalGalaxy.type

    await originalGalaxy.save()
    return originalGalaxy
  }
}



export const galaxyService = new GalaxyService()
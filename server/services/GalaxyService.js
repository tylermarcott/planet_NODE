import { dbContext } from "../db/DbContext.js"



// ok, so I'm creating my create galaxy service and controller. I also need to create my schema and add it to my dbcontext file.
// http://localhost:3000/api/planets

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
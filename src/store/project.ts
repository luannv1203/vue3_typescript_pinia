import { Project } from '@/model/project';
import { defineStore } from 'pinia';
import ProjectService from '../api/ProjectService';
interface ProjectState {
  listProject: Project[],
  project: {}
}
export const useProjectStore = defineStore('project',{
  state: (): ProjectState => ({
    listProject: [],
    project: {}
  }),
  getters: {
    getListProject: (state): Project[] => state.listProject as Project[],
    getProjectDetail: (state): Project => new Project(state.project),
  },
  actions: {
    async fetchListProject() {
      const rs = await ProjectService.getListAllProject()
      if(rs && rs.status) {
        this.listProject = rs.data.map((e: any) => new Project(e))
      }
    },

    async getProjectById(id: string) {
      const rs = await ProjectService.getProjectById(id)
      if(rs && rs.status) {
        this.project = rs.data
      }
    },

    async createProject(data: Map<string, any>) {
      const rs = await ProjectService.createProject(data)
      return rs
    },

    async updateProject(data: Map<string, any>) {
      const rs = await ProjectService.updateProject(data)
      return rs
    }
  }
})

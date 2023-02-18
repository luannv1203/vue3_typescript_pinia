import { User } from '@/model/user';
import { defineStore } from 'pinia';
import ProjectService from '../api/ProjectService';
interface ProjectState {
  listProject: [],
  project: {}
}
export const useProjectStore = defineStore('project',{
  state: (): ProjectState => ({
    listProject: [],
    project: {}
  }),
  getters: {
    getListProject: (state) => state.listProject
  },
  actions: {
    async fetchListProject() {
      const rs = await ProjectService.getListAllProject()
      console.log('asdadasdasdas' + rs);
      if(rs && rs.status) {
        this.listProject = rs.data
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

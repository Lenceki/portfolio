class ApplicationModel {
    constructor({
        name,
        logo,
        desc,
        tasks,
        images,
        video,
        status,
        company,
        tools,
        links,
    }) {
      this.name = name
      this.desc = desc
      this.tasks = tasks
      this.images = images
      this.video = video
      this.logo = logo
      this.status = status
      this.company = company
      this.tools = tools
      this.links = links
    }
  }
  
  export default ApplicationModel
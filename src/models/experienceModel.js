class ExperienceModel {
  constructor({
    story,
    position,
    company,
    address,
    logo,
    dateStart,
    dateEnd,
    type,
    tools,
    level
  }) {
    this.level = level
    this.story = story
    this.position = position
    this.company = company
    this.address = address
    this.logo = logo
    this.dateStart = dateStart
    this.dateEnd = dateEnd
    this.type = type
    this.tools = tools
  }
}

export default ExperienceModel
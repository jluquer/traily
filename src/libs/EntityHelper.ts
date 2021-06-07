export default class EntityHelper {
  /**
   * It's used to set class properties from the body request. It will
   * take the body properties and set them as a entity property.
   * 
   * @param entity class instance
   * @param body request body
   */
  static setColumnsFromBody(entity: any, body: any) {
    Object.keys(body).forEach((property) => {
      entity[property] = body[property];
    });
  }
}

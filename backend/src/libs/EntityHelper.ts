export default class EntityHelper {
  static setColumnsFromBody(entity: any, body: any) {
    Object.keys(body).forEach((property) => {
      if (entity.hasOwnProperty(property)) entity[property] = body[property];
      else throw property + " does not exist in " + typeof entity;
    });
  }
}

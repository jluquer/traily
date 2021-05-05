export default class EntityHelper {
  static setColumnsFromBody(entity: any, body: any) {
    Object.keys(body).forEach((property) => {
      entity[property] = body[property];
    });
  }
}

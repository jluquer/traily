import * as multer from "multer";
import * as uuid from "uuid";
import * as path from "path";
import * as fs from "fs";

export default class StorageHelper {
  private static dir = "uploads";

  /**
   * Get a multer instance to be used in middlewares. Moreover,
   * sets the storage directory. If it does not exist, it will create
   * the directory.
   * 
   * @returns multer instance.
   */
  static get multer(): multer.Multer {
    const dir = StorageHelper.dir;
    const storage = multer.diskStorage({
      destination: dir,
      filename: (req, file, cb) => {
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
        cb(null, uuid.v4() + path.extname(file.originalname));
      },
    });
    return multer({ storage });
  }

  /**
   * Deletes a file it exists.
   * 
   * @param filename file to be deleted.
   */
  static deleteFile(filename: string): void {
    const file = StorageHelper.dir + "/" + filename;
    if (fs.existsSync(file)) fs.unlinkSync(file);
  }

  /**
   * Get the file from storage.
   * 
   * @param filename file that we are looking for
   * @returns a file.
   */
  static getFile(filename: string): string {
    const file = StorageHelper.dir + "/" + filename;
    if (fs.existsSync(file)) {
      return path.resolve(file);
    }
  }

  /**
   * Checks if the filename belongs to any file in storage.
   * 
   * @param filename file to check.
   * @returns true if the file exists.
   */
  static fileExists(filename: string): boolean {
    return fs.existsSync(`${StorageHelper.dir}/${filename}`);
  }
}

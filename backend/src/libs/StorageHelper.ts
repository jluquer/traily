import * as multer from "multer";
import * as uuid from "uuid";
import * as path from "path";
import * as fs from "fs";

export default class StorageHelper {
  private static dir = "uploads";

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

  static deleteFile(filename: string) {
    const file = StorageHelper.dir + "/" + filename;
    if (fs.existsSync(file)) fs.unlinkSync(file);
  }
}

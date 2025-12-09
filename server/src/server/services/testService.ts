import type { Response, Request } from "express";
import HTTP_STATUS from "~/config/httpStatus";

const testHandler = (req: Request, res: Response) => {
  return res.status(HTTP_STATUS.OK).json({ message: "Goodbye" });
};

export default testHandler;

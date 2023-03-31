import { render } from "./render"

export const sharedReferences = (req, res, next) => {
  res.render = render(req, res, next);
  next();
}
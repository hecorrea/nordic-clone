import { render } from "./render"
export * from "./errorMiddleware"

export const sharedReferences = (req, res, next) => {
  res.render = render(req, res, next);
  next();
}
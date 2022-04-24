export function badRequestError(message: string) {
  return { type: "badRequest", message };
}

export function notFoundError(message: string) {
  return { type: "notFound", message };
}

export function unprocessableEntityError(message: string) {
  return { type: "unprocessableEntity", message };
}

export function unauthorizedError(message: string) {
  return { type: "unauthorized", message };
}

export function conflictError(message: string) {
  return { type: "conflict", message };
}

export function typeToStatusCode(type: string) {
  const errorTypesToStatusCode = {
    badRequest: 400,
    notFound: 404,
    unprocessableEntity: 422,
    unauthorized: 401,
    conflict: 409,
  };

  return errorTypesToStatusCode[type];
}

export interface AppError {
  type: "notFound" | "badRequest" | "unprocessableEntity",
  message: string,
}
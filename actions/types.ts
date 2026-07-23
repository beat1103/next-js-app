export type ActionOk<T> = { ok: true; data: T };
export type ActionFail = { ok: false; error: string };
export type ActionResult<T = void> = ActionOk<T> | ActionFail;

export function actionOk<T>(data: T): ActionOk<T> {
  return { ok: true, data };
}

export function actionFail(error: unknown, fallback: string): ActionFail {
  if (error instanceof Error && error.message) {
    return { ok: false, error: error.message };
  }
  return { ok: false, error: fallback };
}

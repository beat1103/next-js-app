<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Data fetching (actions / services / api)

Collabhub-style 3-layer. Call direction is one-way only:

```
UI (client / RSC)
  → actions/*Action     ("use server", zod, ActionResult)
    → services/*Service (orchestration, Api → Ui map)
      → lib/api/*       (sole HTTP / apiFetch)
        → API_URL
```

### Hard rules

1. **Do not call `fetch(API_URL)` outside `lib/api/*`.**
2. **Client components must not import `lib/api` or `services`.** Use Server Actions.
3. **RSC pages may call `*Service` directly** for reads; mutations go through actions.
4. **Actions** own auth/validation, call services, return `ActionResult` (or form state). Never call `apiFetch` directly.
5. **Services** own mapping (`Api*` → `Ui*`) and composing API calls. No `"use server"`.
6. **Types live under `types/`**
   - `types/<domain>/api.ts` — backend DTO (`ApiPost`, …) for `lib/api` only
   - `types/<domain>/ui.ts` — UI model (`UiPost`, …) for components/services
   - form schemas (zod) under `types/<domain>/`
7. **Env:** server-only `API_URL` (fallback `API_BASE_URL`). Do not expose Spring/backend URL via `NEXT_PUBLIC_*` in production.
8. **API paths** live only in `lib/api/endpoints.ts` (`API_ENDPOINTS`). Do not hardcode paths in `lib/api/*.ts`.

### Naming

| Layer   | File                 | Function              |
|---------|----------------------|-----------------------|
| Action  | `actions/posts.ts`   | `listPostsAction`     |
| Service | `services/posts.service.ts` | `listPostsService`, `mapPost` |
| API     | `lib/api/posts.ts`   | `listPosts`, `getPost` |
| Paths   | `lib/api/endpoints.ts` | `API_ENDPOINTS.auth.signUp` |

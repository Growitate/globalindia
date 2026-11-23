# Global India Group

React / Express / tRPC / Drizzle starter, adapted from the Sandbox web-db-user template.

- `npm run dev`: development server; honors `PORT` (default 3000).
- `npm run build` / `npm start`: build and serve `dist/index.js` and `dist/public/`.
- `npm run db:migrate`: apply checked-in migrations. `npm run db:push`: generate and apply new schema changes.
- `npm run check` / `npm test`: types and application tests.

Start with the Webdev skill's default-template guide. Platform login, storage, payments and service contracts live in its shared references; read the relevant capability before extending its helper.

`server/_core/publicConfig.ts` exposes only named public runtime values. Private keys stay server-side. The platform serves managed `/manus-storage/` assets; the application does not register a second proxy.

Platform configuration is readable and editable through `webdev.config`. Default settings are initial values, not enforced constraints. The agent may modify the files, commands and configuration or follow the flexible guide for another stack.

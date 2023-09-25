### prisma commands
- create migration : npx prisma migrate dev --create-only --name `name_of_migration`
- check for schema drift: `npx prisma migrate dev`
- tell prisma to update schema based on state of database: `npx prisma db pull`
- run migrations: `npx prisma migrate deploy`

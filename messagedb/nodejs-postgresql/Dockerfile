FROM postgres:14.1-alpine

ENV POSTGRES_USER postgres

ENV POSTGRES_PASSWORD docker

ENV POSTGRES_DB messagedb

ENV PGDATA /var/lib/postgresql/data/pgdata
# above needs to eventually be a volume

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432:55432
 
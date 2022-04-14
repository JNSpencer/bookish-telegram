FROM postgres:14.1-alpine

ENV POSTGRES_USER postgres

ENV POSTGRES_PASSWORD docker

ENV POSTGRES_DB logdb

ENV PGDATA /var/lib/postgresql/data/pgdata
# above needs to eventually be a volume

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 2345:22345
 
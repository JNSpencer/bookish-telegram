FROM postgres:12.2-alpine

USER postgres

EXPOSE 5433

# VOLUME [ "/data/db" ]
  
FROM library/postgres
COPY init.sql /docker-entrypoint-initdb.d/

FROM library/postgres
ENV POSTGRES_USER docker2
ENV POSTGRES_PASSWORD password2
ENV POSTGRES_DB log2
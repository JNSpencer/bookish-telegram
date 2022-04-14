
FROM postgres:12.2-alpine

USER postgres

EXPOSE 5432

# VOLUME [ "/data/db" ]
  
FROM library/postgres
COPY init.sql /docker-entrypoint-initd2.d
ENTRYPOINT ["docker-entrypoint.sh"]
EXPOSE 5432
CMD ["postgres"]
RUN chown postgres:postgres /docker-entrypoint-initdb.d/init.sql

FROM library/postgres
ENV POSTGRES_USER docker1
ENV POSTGRES_PASSWORD password1
ENV POSTGRES_DB msgdb
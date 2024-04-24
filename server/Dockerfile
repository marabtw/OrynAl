ARG GO_VERSION=1.20

FROM golang:$GO_VERSION-alpine as deps

WORKDIR /app

COPY ./app/go.mod ./app/go.sum ./

RUN go mod download -x

###########################################################

FROM deps as builder-main
WORKDIR /app
COPY app /app
RUN pwd && go build -o /app/main ./cmd/main.go

###########################################################

FROM deps as builder-migrate
WORKDIR /app
COPY app /app
RUN go build -o /app/migrate /app/scripts/migrate.go

  ##################################################

#FROM deps as builder-seed
#WORKDIR /app
#COPY app /app
#RUN go build -o /seed /app/scripts/seed.go
#
#  ##################################################

FROM deps as builder-unmigrate
WORKDIR /app
COPY app /app
RUN go build -o /app/unmigrate ./scripts/unmigrate.go


#  ##################################################

FROM alpine:latest

WORKDIR /app

COPY --from=builder-main /app/main /app/main
COPY --from=builder-migrate /app/migrate /app/migrate
COPY --from=builder-unmigrate /app/unmigrate /app/unmigrate
# COPY --from=builder-seed /seed /seed

COPY ./app/.env /app/.env
COPY ./app/config.yml /app/config.yml

EXPOSE 5000

CMD ["/app/main"]

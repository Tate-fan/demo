# YSP demo Makefile
export NODE_ENV=production
VERSION := $(shell cat package.json | jq '.version')
TARGET := ysp/manager-api:${VERSION}

all:
	@echo ${NODE_ENV}
	@echo ${VERSION}
	@echo ${TARGET}

install-dep:
	@npm i

test:
	npm test

run-prod:
	npm start

build-image:
	docker build -t ${TARGET} .

.PHONY: all test

# demo Makefile
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
	- docker rmi ${TARGET}
	docker build -t ${TARGET} .

build-doc:
	@npm run build-doc

fix:
	@npm run fix

.PHONY: all test run-prod build-image build-doc fix

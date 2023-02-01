FROM node:13.12.0-alpine

ENV APP_HOME /alexander_jasper_ui_garden_build_checks
WORKDIR $APP_HOME

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

ENV PORT 8018

EXPOSE 8018

COPY . .
CMD ["npm", "run", "storybook"]
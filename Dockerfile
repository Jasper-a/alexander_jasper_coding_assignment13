FROM node:13.12.0-alpine

ENV APP_HOME /alexander_jasper_ui_garden
WORKDIR $APP_HOME

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

ENV PORT 8083

EXPOSE 8083

COPY . .
CMD ["npm", "run", "storybook"]
FROM node:22
WORKDIR /app
# RUN npm create vite@latest frontend -- --template react
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev" ,"--", "--host"]

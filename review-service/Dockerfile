# use node 9.5
FROM node:9.5.0

# set container working directory to /app
WORKDIR /app

# put current contents into /app 
ADD . /app 

# expose port 4008
EXPOSE 4008

#
ENV ASSET_PATH /reviews/

# install tools
RUN npm install
# build
RUN ./node_modules/.bin/webpack --config ./webpack.config.js
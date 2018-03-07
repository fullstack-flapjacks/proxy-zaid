# Fullstack Flapjacks (Open Table Restaurant Page Clone)

> The full project represents a restaurant page on Open Table. This repo contains 5 microservice which render both client & server-side modules for each of the 5 components that contribute to a full Open Table restaurant page. Additionally, this repo contains a proxy-server instance that combines all components and fetches appropriate content from each of the microservices avaialble. For additional detail on how to render each component - visit related project repos for instructions on installing dependencies, connecting to databases and seeding data for each component.

## Related Projects

- https://github.com/fullstack-flapjacks/Menu-Module
- https://github.com/fullstack-flapjacks/suggested-restaurants
- https://github.com/fullstack-flapjacks/About_Map_Info-module
- https://github.com/fullstack-flapjacks/review-service
- https://github.com/fullstack-flapjacks/reservation-widget

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. From root directory go to each "[microservice]-service" directory & run 'npm install' for each microservice
2. From each microservice directory, seed data for each microservice (see instructions in package.json for each microservice for scripts to run) 
3. For each microservice, run each server instance on appropriate port 
4. From root, run proxy server instance 
5. Visit localhost:3000/r/[id] where [id] is a random id between 0-200 and represents an individual restaurant

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```


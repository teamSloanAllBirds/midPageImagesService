# midPageImages

#### A replication of the Allbirds shop media component

> midPageIamges contains a hoverable grid, a full-screen modal carousel, and product descriptions

## teamSloan Organization Repository

  - https://github.com/teamSloanAllBirds

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [React Component Breakdown](#React-Component-Breakdown)

## Usage

> This component is designed to be used with the imageCarousel, productOptions, and productReviews components to create a replica of the Allbirds site.

## Requirements

- Node > 6.13.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Seeding the Database

midPageImages uses the same database as imageCarousel, so no additional seeding is necessary

### Starting the server

From within the root directory:

Run webpack:
```sh
npm run build
```

Run the nodemon server:
```sh
npm run start
```

# React Component Breakdown

## App Component

### Child React Components
  - MidPageImages

### State
  - urls - array containing links AWS-stored images for given product ID
  - descriptions - array containing descriptions for given product ID

### Methods
  - componentDidMount()
    - Invoked when component mounts
    - Fetches image urls for product ID 1

  - fetchId(id)
    - Sends an axios request to the server with a provided ID
      - Then updates state with the returned urls and descriptions

## MidPageImages Component

### Overview
  - Stateless component that dynamically renders and zooms in on images from the parent state
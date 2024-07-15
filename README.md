# ControllerCon
---
## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Documentation](#api-documentation)
6. [Contributing](#contributing)
7. [License](#license)
---
## Introduction

ControllerCon is a platform designed to facilitate gaming events and tournaments. It provides a comprehensive set of tools for event organizers and participants, including event creation, management, and participation features.
---
## Features

### Basic Features
1. **Authentication**: Utilizes Discord API for user authentication.
2. **Event Creation**: Allows users to create gaming events with customizable settings.
3. **Event Listings**: Displays individual events and a comprehensive event listing page.
4. **Event Applications**: Enables users to apply for participation in events.
5. **Application Handling**: Provides tools for event organizers to manage applications.
6. **Participant Tracking**: Allows organizers to track and manage event participants.

### Additional Features
1. **Event Settings**: Offers advanced customization options for events.
2. **Voting System**: Implements audience and judge voting capabilities.
3. **Embedded Streams**: Supports integration with various streaming platforms.
4. **Event Posts**: Allows creation and management of event-related posts.
5. **User Classes**: Implements different user roles with varying permissions.
6. **Event Customization**: Offers options for custom header images and color schemes.
7. **Event Sorting and Filtering**: Provides tools to sort and filter events based on various parameters.
8. **Social Media Integration**: Allows linking of social media accounts to events.
---
## TODO
- Currently working on some more features
- To be deploted on Azure
---
## Installation

```bash
git clone https://github.com/xartus2004/ControllerCon.git

cd backend
npm i
#Setup environment variables
touch .env
cp .env.sample .env
npm run dev

cd controller-con
npm i
npm run dev
# Angular Social Feed

A modern social feed application built with Angular, NgRx, RxJS and NestJS.

The project demonstrates authentication with Google OAuth, JWT-based authorization, reactive state management with NgRx, REST API integration, and a scalable frontend architecture.

This project was created as part of my frontend portfolio while focusing on Angular development and modern application architecture.

## Screenshots

Login page
<img width="3024" height="1816" alt="image" src="https://github.com/user-attachments/assets/66928a72-b3d7-45f0-a641-02d946b1b640" />

Home page
<img width="3016" height="1816" alt="image" src="https://github.com/user-attachments/assets/867a6d5f-22dd-48e1-973e-9a77de1d1f01" />

Publications
<img width="3024" height="1802" alt="image" src="https://github.com/user-attachments/assets/6850a918-6c66-41c5-8e7c-d87fa60df0a9" />



## Features

### Authentication

* Google OAuth login
* JWT authentication
* Route guards
* HTTP interceptor for Bearer token handling
* Persistent login after page refresh

### User Profiles

* Personal profile page
* Public user profiles
* User information card
* Profile navigation

### Posts

* Create new posts
* Display user posts
* Feed of posts
* Delete own posts
* View author information
* Navigate to author profiles

### State Management

* NgRx Store
* NgRx Effects
* Selectors
* Reactive state updates
* Centralized application state

### Frontend Architecture

* Standalone Components
* Feature-based structure
* Shared UI components
* Reactive Forms
* Route-based navigation
* Guards and interceptors

## Tech Stack

### Frontend

* Angular
* TypeScript
* RxJS
* NgRx Store
* NgRx Effects
* Angular Router
* Reactive Forms
* SCSS

### Backend

* NestJS
* TypeORM
* PostgreSQL
* Passport.js
* JWT
* Google OAuth 2.0

### Tools

* Git
* npm
* Angular CLI
* Postman
* VS Code

## Architecture

The project follows a modular Angular structure:

### Features

* Auth
* Profile
* Posts

### Shared Components

* Header
* User Card
* Post Card
* Post Feed
* Post Composer

### Core

* API services
* Authentication services
* Route guards
* HTTP interceptors

### State Management

* Auth Store
* Profile Store
* Post Store

## Concepts Demonstrated

### Angular

* Standalone Components
* Dependency Injection
* Route Guards
* HTTP Interceptors
* Reactive Forms
* Lazy-loaded Routes

### RxJS

* Observables
* async pipe
* switchMap
* map
* catchError
* reactive data flow

### NgRx

* Actions
* Reducers
* Effects
* Selectors
* Store architecture

### Backend Integration

* REST API communication
* JWT authentication
* Google OAuth flow
* Protected endpoints
* User session restoration

## Screenshots

### Login Page

Login with Google authentication.

### Profile Page

User profile with personal information and posts.

### Feed

List of posts with author information.

### Create Post

Reactive form for creating new posts.

## Installation

### Clone the repository

```bash
git clone https://github.com/yurii-donnikov/angular-social-feed.git
```

### Install dependencies

```bash
npm install
```

### Run frontend

```bash
ng serve
```

### Run backend

```bash
npm run start:dev
```

Frontend:

```text
http://localhost:4200
```

Backend:

```text
http://localhost:3000
```

## Learning Goals

This project was built to practice and demonstrate:

* Angular application architecture
* NgRx state management
* RxJS reactive programming
* Authentication and authorization flows
* REST API integration
* Component-driven development
* Modern frontend development practices

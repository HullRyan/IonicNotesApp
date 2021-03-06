# Ionic Notes Application

This application is a project for ITSC 3155 Software Engineering at UNC Charlotte, made by me, Ryan Hull.

**Built from scratch using the Ionic Framework with Angular, and Capacitor/ Cordova Plugins.**

## Table of Contents

- [Purpose/ Goals](#purpose-goals)

- [Overview](#overview)

- [How to Deploy](#how-to-deploy)

- [Application Preview](#application-preview)

- [Engineering Process](#engineering-process)
  - [Sprint 1](#sprint-1-482021---4192021-heavy_check_mark)
  - [Sprint 2](#sprint-2-4192021---4272021-heavy_check_mark)
  - [Sprint 3](#sprint-3-4272021---552021-eyes)

- [Testing Process](#testing-process)

## Purpose/ Goals

- Showcase an application of the engineering process
- Showcasing an application of the development cycle
- Following the Agile model
- Practicing Test Driven Development
- Knowledge of Common Design Patterns
- Showcase the use of current and active frameworks

## Overview

- Built using Angular.
- Built to be a cross-platform, cloud-based notes application for use on web, android, iOS, and desktop.
- Uses a Google Firebase, Firestore Database for the authentication and storage of users, and notes.
- See [package.json](/package.json) for full list of dependencies and plugins.

## How to Deploy

### Requirements

- [Ionic CLI](https://ionicframework.com/docs/intro/cli)
- [Node.js](https://nodejs.org/en/)

### Steps

1. Clone repository `git clone https://github.com/HullRyan/IonicNotesApp`
2. Create Google Firebase Project and Firestore Database
3. Create collections for users, notes. See [DATABASE.md](DATABASE.md)
4. Create and place your Firebase SDK Config snippet into [/src/environments/environment.ts]()
5. Run `npm install` from root to install dependencies
6. Run `ionic serve` or build to desired platform with `ionic build` and deploy
7. Enjoy :notebook::pencil2:

## Application Preview

### [Login](/src/app/home/home.page.html)

| Material Design    | iOS                |
| ------------------ | ------------------ |
| <img src="/resources/screenshots/login-page(Pixel-2-XL).png" width=83%/> | <img src="/resources/screenshots/login-page(iPhone-X).png"/> |

### [Register](/src/app/pages/register/register.page.html)

| Material Design    | iOS           |
| ------------------ | ------------- |
| <img src="/resources/screenshots/register-page(Pixel-2-XL).png" width=83%/> | ![iOS Register](/resources/screenshots/register-page(iPhone-X).png) |

### [Create Note](/src/app/pages/note-details/note-details.page.html)

| Material Design    | iOS           |
| ------------------ | ------------- |
| <img src="/resources/screenshots/note-page-create(Pixel-2-XL).png" width=83%/> | ![iOS Create Note](/resources/screenshots/note-page-create(iPhone-X).png) |

### [Notes List](/src/app/pages/notes-list/notes-list.page.html)

| Material Design    | iOS           |
| ------------------ | ------------- |
| <img src="/resources/screenshots/notes-page(Pixel-2-XL).png" width=83%/> | ![iOS Notes List](/resources/screenshots/notes-page(iPhone-X).png) |

### [Edit Note](/src/app/pages/note-details/note-details.page.html)

| Material Design    | iOS           |
| ------------------ | ------------- |
| <img src="/resources/screenshots/note-page-edit(Pixel-2-XL).png" width=83%/> | ![iOS Edit Note](/resources/screenshots/note-page-edit(iPhone-X).png) |

### [Set Reminder](/src/app/services/notification.service.ts)

| Material Design    | iOS           |
| ------------------ | ------------- |
| <img src="/resources/screenshots/set-reminder(Pixel-2-XL).png" width=83%/> | ![iOS Set Reminder](/resources/screenshots/set-reminder(iPhone-X).png) |

### [Desktop Notes List](/src/app/pages/notes-list/notes-list.page.html)

| Windows            |
| ------------------ |
| ![Windows Desktop Notes List](/resources/screenshots/notes(Laptop).png) |

## Engineering Process

### Agile Methodology

### Sprint 1: (4/8/2021 - 4/19/2021) :heavy_check_mark:

- Plan: Local Notes and Reminders App
  - Features extracted from user stories:
    - Save/ Delete Notes
    - Set Single/ Recurring notifications
    - Clear set notifications
- Design: Ionic Framework base application
  - Notes List page
  - Note Details/ Edit page
  - Note service
- Development: Implement local storage for notes and reminders
  - Capacitor - Cordova plugins
  - Notes service
  - Notification service
- Testing: Tested all functions made with built in data

  - Made notes, deleted notes, set notification, deleted notification
- Review: Missing cross-platform functionality
  - Added user stories based on feedback
    - Needed: Responsive UI vs current Static UI
    - Needed: Cloud database for notes

### Sprint 2: (4/19/2021 - 4/27/2021) :heavy_check_mark:

- Plan: Cloud Notes App with Reminders
  - Features extracted from user stories:
    - Account creation/ authentication
    - Note storage in Cloud database
    - Responsive UI for cross-platform use
- Design: Sprint 1 UI Base
  - Login/Home page
  - Register page
  - Notes List page
  - Note Details/ Edit page
- Development: Implement Cloud functionality
  - Firestore database
  - Responsive UI with HTML and CSS styling
  - Angular authentication service
  - Update note service for use with database
  - Attached notification service to note service through notification interface
- Testing: Testing authentication, note functions, reminders, UI
  - Tested all tests from Sprint 1
  - Tested account creation, deletion, sign in, sign out
  - Tested UI on platforms with varying sizes (Web, Android, iOS, Windows)
- Review: Missing functionality for complex data in note,  notification control and settings
  - Added user stories based on feedback
    - Needed: Color tag functionality and control  
    - Needed: Advanced Text Editor in place for Note body
    - Needed: Notifications view page
    - Needed: Updated database collection and fields for search and sorting

### Sprint 3: (4/27/2021 - 5/8/2021) :heavy_check_mark:

- Plan: Markdown Notes App with advanced Notification Integration
  - Features extracted from user stories:
    - Markdown Editor for Note body
    - Note colors customization
- Design: Sprint 2 UI Base    
  - Login/ Home page
  - Register page
  - Notes List page
  - Note Details/ Edit Page
- Development: Implement Quill Rich Text Editor
  - Custom toolbar for wanted features
  - Add color tag functions
  - Update notes list
- Testing: Repeat Unit Tests
- Review: Missing notification control and settings, note organization
   - Needed: Notifications view page
   - Needed: Updated database collection and fields for search and sorting
 
## Testing Process
See Spec files for testing processes and functions.

|Unit Testing using Karma and Jasmine|
|-------|
|![Testing](/resources/screenshots/Testing.PNG)|


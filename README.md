# Ionic Angular Notes Application

This application is a project for ITSC 3155 Software Engineering at UNC Charlotte, made by me, Ryan Hull.

**Built from scratch using the Ionic Framework with Angular, and Capacitor/ Cordova Plugins.**

## Table of Contents

- [Purpose/ Goals](#purpose-goals)

- [Overview](#overview)

- [Application Preview](#application-preview)

- [How to Deploy](#how-to-deploy)

- [Engineering Process](#engineering-process)

  - [Agile]
  
  

## Purpose/ Goals

* The purpose of this project is to showcase the engineering process, showcasing the development cycle, Agile model, test--driven development, design patterns, current and active frameworks
* 



## Overview

* Built using Angular.
* Built to be a cross-platform, cloud-based notes application for use on web, android, iOS, and desktop.
* Uses a Google Firebase, Firestore Database for the authentication and storage of users, and notes.
* See [package.json]() for full list of dependencies and plugins.



## Application Preview

### [Login]()

| Material Design    | iOS           |
| ------------------ | ------------- |
| ![Android Login](/resources/screenshots/login-page(Pixel-2-XL).png) | ![iOS Login]() |

### [Register]()

| Material Design    | iOS           |
| ------------------ | ------------- |
| ![Android Login]() | ![iOS Menu]() |

### [Create Note]()

| Material Design    | iOS           |
| ------------------ | ------------- |
| ![Android Login]() | ![iOS Menu]() |

### [Notes List]()

| Material Design    | iOS           |
| ------------------ | ------------- |
| ![Android Login]() | ![iOS Menu]() |

### [Edit Note]()

| Material Design    | iOS           |
| ------------------ | ------------- |
| ![Android Login]() | ![iOS Menu]() |

### [Set Reminder]()

| Material Design    | iOS           |
| ------------------ | ------------- |
| ![Android Login]() | ![iOS Menu]() |

### [Desktop Notes List]()

| Windows            |
| ------------------ |
| ![Android Login]() |



## How to Deploy

### Requirements: 

* [Ionic CLI](https://ionicframework.com/docs/intro/cli)
* [Node.js](https://nodejs.org/en/)

### Steps:

1. Clone repository `git clone https://github.com/HullRyan/IonicNotesApp`
2. Create Google Firebase Project and Firestore Database
3. Create collections for users, notes. See [database.md]()
4. Place your Firebase SDK Config snippet into [/src/environments/envoironments.ts]()
5. Run `npm install` from root to install dependencies
6. Run `ionic serve` or build to desired platform with `ionic build` and deploy
7. Enjoy :notebook::pencil2:



## Engineering Process

### Agile Methodology:

### Sprint 1: (4/8/2021 - 4/19/2021) :heavy_check_mark:
  *  Plan: Local Notes and Reminders App 
    * Features extracted from user stories:
      * Save/ Delete Notes
      * Set Single/ Recurring notifications
      * Clear set notifications
  * Design: Ionic Framework base application
    * Notes List page
    * Note Details/ Edit page
    * Note service
  * Development: Implement local storage for notes and reminders
    * Capacitor - Cordova plugins
    * Notes service
    * Notification service
  * Testing: Tested all functions made with built in data
    
    * Made notes, deleted notes, set notification, deleted notification
  * Review: Missing cross-platform functionality
    * Added user stories based on feedback
      * Needed: Responsive UI vs current Static UI
      * Needed: Cloud database for notes 



### Sprint 2: (4/19/2021 - 4/27/2021) :heavy_check_mark:
  * Plan: Cloud Notes App with Reminders
    * Features extracted from user stories:
      * Account creation/ authentication
      * Note storage in Cloud database
      * Responsive UI for cross-platform use
  * Design: Sprint 1 UI Base
    * Login/Home page
    * Register page
    * Notes List page
    * Note Details/ Edit page
  * Development: Implement Cloud functionality
    * Firestore database
    * Responsive UI with HTML and CSS styling
    * Angular authentication service
    * Update note service for use with database
    * Attached notification service to note service through notification interface
  * Testing: Testing authentication, note functions, reminders, UI
    * Tested all tests from Sprint 1
    * Tested account creation, deletion, sign in, sign out
    * Tested UI on platforms with varying sizes (Web, Android, iOS, Windows)
  * Review: Missing functionality for complex data in note,  notification control and settings
    * Added user stories based on feedback
      * Needed: Notifications view page
      * Needed: Advanced Text Editor in place for Note body
      * Needed: Updated database collection and fields for search and sorting



### Sprint 3: (4/27/2021 - Current) :eyes:

* Plan: Markdown Notes App with advanced Notification Integration
  * Features extracted from user stories:
    * Markdown Editor for Note body
    * Notifications list page
    * Notes list sort/ search 
* Design: Sprint 2 UI Base    (Current Stage - 4/27/2021 :pushpin:)
  * Login/ Home page
  * Register page
  * Notes List page
  * Note Details/ Edit Page
  * Settings Tab
    * Account functions
    * Notification List Page



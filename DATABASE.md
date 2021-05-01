# Firestore Database Design/ Schema

## Current Firestore Schema (4/27/2021)

* Collection: users
  * id: string (Auto-ID)
  * email: string
  * name: string
  * Collection: notes
    * id: string (Auto-ID)
    * title: string
    * body: string
    * notifId: number
    * createdOn: timestamp
    * updatedOn: timestamp
    * colorTag: string

## LocalStorage Schema and Ideology

### Ionic/Storage

* Stores authentication token from notification service
* Connects notification to note by notifId

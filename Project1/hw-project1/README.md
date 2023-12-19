# MangaSiteApp

## `MangaMain component`

Main page with list of manga and search

### getMangaList() 

Retrieve data about manga from Firebase, and save it into useState arrays mList and Manga

### search()

Using Regular Expressions search manga from mList array. Search text match in title, artist and author name, year and words in description. Set mathching elements into main array mangas



## `MangaPage component`

Page with manga characters, chapters. Here you also can add manga to your list and leave comment.

### getManga()

Retrieve data about manga from Firebase, and save it into useState array Manga

### getComs()

Retrieve data of comments regarding manga from Fireabase

## commentWrite component

Used in MangaPage Component to write comments.

### write()

Add comment to Firebase firestore. Comment contain your email, date and text.

## comment component

Used in MangaPage Component as model of comment


## `MyPage component`

Shows your email and your manga list. Every manga has delete button and if you push manga cover you would get to mangaPage

### getMangaList()

Retrieve data about manga from Firebase, and save it into useState array Manga

### getUM()

Retrieve data of all user's mangalists. Filter and get id's of all manga current user has in his list.


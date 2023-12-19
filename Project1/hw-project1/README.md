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

## `GenreList component`

If you click genre in manga post, you get to page with list of manga that has this genre.


## `LogRegPage Component`

Has two mode depending what number is param in url adress. 1 - Login, 2 - Register

## Login component

### login()

Sign in account using firebase authentication. If it get response, you get to MangaMain. Elseway it catch error.

## Reg component

### signup()

Create new account in Firebase. If it create, you get to MangaMain. Elseway it catch error

## `Admaker component`

Page to set and update the single ad data in Firebase that will appear in the top of every page.

### done()

update in Firebase image, url, title and description of ad using inputs from Admaker page.

## AdPage component

The model component for ad banner

### getAd()

Retrieve data from firebase about the single ad that will appear in the top of every page.


## `Additional components`

## FireBaser

Configurations for FireBase initialization and access to data

## Hat

Every page has hat. It has two modes. If you are logged in, it has Home, Mypage and Log out title-buttons. Otherwise it has Home and LogIn title-buttons.

### logout()

Sign out from firebase account.

## MangaCard

Model of mangapost used in MangaMain

It has image, manga name, author, artist, year, list of genres and description. Button "Подробнее" navigate you to MangaPage of this manga.

## MangaCard2

The same as MangaCard but instead of "Поподробнее" save button, that save this manga to your mangaList. Its used in MangaPage page.

### save()

Save into Firebase "MangaOfUsers" collection your email and manga id

## MangaCard3

The same as MangaCard but instead of "Поподробнее" delete button, that delete manga from your mangalist. Its used in MyPage page.

## Characters

Model of character used in MangaPage. Contain character image and name.

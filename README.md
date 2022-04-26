# Będę Mamą
<img src="https://github.com/mKepka16/loremipsum/blob/main/client/public/photos/logo.svg" alt="drawing" width="200"/>

Aplikacja na konkurs **HackHeroes** stworzona przez zespół **loremipsum**.

## Zobacz naszą aplikację online!
Aplikację **Będę mamą** możesz zobaczyć już teraz [tutaj](https://loremipsum-hackheroes.herokuapp.com/).

## Jak uruchomić aplikację lokalnie?
Aby uruchomić aplikację **Bedę Mamą** należy pobrać [node.js](https://nodejs.org/en/) i kod źródłowy z brancha _main_.

W folderze głównym trzeba utworzyć plik _.env_, a w nim wpisać dane według schematu:
* `ACCESS_TOKEN_SECRET=ciąg-znaków-na-podstawie-którego-będzie-przeprowadzana-autoryzacja-użytkowników`
* `EMAIL_USER=login-do-konta-gmail-z-którego-będą-wysyłane-maile-z-podstrony-Q&A` np. loremipsum3
* `EMAIL_PASSWORD=hasło-do-konta-gmail` np. wygramyKonkursHackheroes
* `EMAIL=gmail` np. loremipsum3@gmail.com
* `MONGODB=adres-bazy-danych-mongodb-atlas` np. mongodb+srv://login:password@mongodefaultdb.cavku.mongodb.net/loremipsum?retryWrites=true&w=majority

Aby przygotować projekt do uruchowienia przejdź w terminalu do folderu z pobranym kodem źródłowym, a następnie wpisz kolejno komendy:
* `npm install`
* `cd client`
* `npm install`
* `cd ../`
  
Następnie, aby uruchomić stronę, wpisz komendę:
* `npm run dev`
  
##### Uwaga!
Aby w aplikacji działała opcja wysyłania maili pamiętaj aby w ustawieniach konta google była włączona możliwość logowanie się przez mniej bezpieczne aplikacje. Więcej informacji [tutaj](https://support.google.com/accounts/answer/3466521?hl=en). Dostęp mniej bezpiecznych aplikacji można włączyć [tutaj](https://myaccount.google.com/security).

## Dokumentacja
Dokumentacje naszej aplikacji znajdziesz [tutaj](https://docs.google.com/document/d/1Q44Y6raXL_zKQb6XvoThQRmUStSRaXSEA2cO1yqyf4c/edit?usp=sharing).

## loremipsum

## Członkowie

***Adam Kot***
***Michał Kępka***

### Role w zespole
Opis poszczególnych ról, jakie posiadali członkowie naszego zespołu, możesz sprawdzić [tutaj](https://drive.google.com/file/d/1S24dO8OagQZ_b8HLdRX75S771hGjX6S7/view?usp=sharing).

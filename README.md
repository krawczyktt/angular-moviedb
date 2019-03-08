# Angular MovieDB
Aplikacja pozwalająca wyszukiwać i przeglądać filmy korzystająca z bazy danych [MovieDB](https://www.themoviedb.org/).

Tomasz Krawczyk  
krawczyktt@gmail.com  
Nr albumu: **10309**  

## Wykorzystane technologie
- [Angular@7.2.0](https://github.com/angular/angular)
- [Angular Material](https://github.com/angular/material2)
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [hammerjs](https://github.com/hammerjs/hammer.js)

## Instrukcja instalacji i uruchomienia aplikacji

### Instalacja aplikacji
```
git clone https://github.com/krawczyktt/angular-moviedb.git
cd angular-moviedb
npm install
```
### Konfigurowanie klucza API
Następnie należy odwiedzić [stronie developerskiej MovieDB](https://developers.themoviedb.org/3/getting-started/introduction) w celu utworzenia nowego konta i pozyskania kluczu API.  
Po uzyskaniu klucza, należy go umieścić w pliku `src/environments/environment.ts` w ten sposób:
```javascript
export const environment = {
  production: false,
  apiKey: 'TUTAJ_WKLEJ_KLUCZ_API',
};
```
### Uruchomienie aplikacji
Teraz wystarczy uruchomić aplikację poprzez wykonanie komendy
```
npm start
```
Po wykonaniu komendy `npm start`, aplikacja będzie dostępna pod adresem [http://localhost:4200](http://localhost:4200).

## Funkcjonalności

- ### Ładowanie danych z zewnętrznego API.
  - Do korzystania z aplikacji potrzebny jest klucz API, który można pozyskać na [stronie developerskiej MovieDB](https://developers.themoviedb.org/3/getting-started/introduction). Wymagane jest założenie darmowego konta.
- ### Możliwość przeszukiwania bazy filmów.

  - Domyślnie wyświetlane są najpopularniejsze produkcje.
  - Request do serwera podczas wyszukiwania wykonywane są z opóźnienem 250ms (debouncing). Pozwala to ograniczyć zbędne zapytania podczas wpisywania wyszukiwanego tekstu.
  - Aplikacja wyświetla 20 najtrafniejszych wyników, a każdy z nich składa się z okładki filmu, tytułu oraz opisu skróconego do 3 linii.

- ### Możliwość przeglądania pojedynczego filmu
  - Po kliknięciu w rekord w wynikash wyszukiwania następuje przekierowanie na podstronę danego filmu. Do routingu wykorzystany jest Angular Router.
  - Jako tło podstrony wyświetlany jest możliwie wysokiej rozdzielczości obraz filmu.
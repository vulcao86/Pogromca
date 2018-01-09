Pogromca = Programowanie W Internecie projekt 2017 = autor Piotr S³upczewski 106423

Gra zrêcznoœciowa polegaj¹ca na zdobyciu jak najwiêkszej liczby punktów przez eliminacjê wrogich jendostek oraz zbieranie bonusów.

Logujemy siê korzystaj¹c z sekcji "LOGIN" podaj¹c swój mail i has³o.

przyk³adowe konto testowe:
login "gienek@wp.pl" password "123"

Je¿eli chcemy utworzyæ nowe konto, musimy przejœæ do sekcji login oraz wype³niæ wszystkie pola zgodnie z prawd¹ (sprawdzana jest d³ugoœæ wprowadzanych danych oraz poprawnoœæ adresu e-mail) 

¯eby zagraæ w grê, po rejestracji/zalogowaniu przejdŸ do sekcji "GAME" i kliknij w link.

Sterujemy samolotem klawiszami wsad,
	 ^
	 |
	 w
<==== A     D=====>
	S
	| 	
	V

dostêpne bronie:

j - laser
u - ulepszony laser
k - bomby


Najlepsze wyniki s¹ zapisywane w tablicy High Score, która jest pokazywana obok planszy/na koniec gry.



features===============================================================================

wyœwietlanie informacji o po³¹czeniu z db

logowanie, wylogowywanie, rejestracja
walidacje wszystkich pól przy rejestracji warunki (3-20 znaków), adres mailowy we w³aœciwej formie
logowanie za pomoc¹ maila + has³o z bazy zapisane md5 (wprowadzamy normalne, niezakodowane has³o z kolumny passwordnotmd5)

poruszanie siê statkiem, strzelanie, wyœwietlanie liczby strza³ów, trafieñ, liczby punktów


struktury tabel====================================================================
baza danych login_db============================================
==========tabela users==========================================
pola:

id (autoincrement) 	username 	email 	password 	first_name 	last_name 	validation_code 	active 	passwordnotmd5

zapis punktów z gry do bazy
===============tabela wyniki====================================
pola
id(auto) username liczba_punktów data_gry liczba_pociskow_wystrzelonych hit_ratio

TODO====

1. niszczenie obiektów
2. bonusy
3. z³o¿one zapytanie do tabeli z wynikami do wyœwietlenia w highscore + tabela z najlepszymi wynikami
4. CSS kolory + wersja jêzykowa
5. collisionDetection 
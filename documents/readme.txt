Pogromca = Programowanie W Internecie projekt 2017 = autor Piotr S�upczewski 106423

Gra zr�czno�ciowa polegaj�ca na zdobyciu jak najwi�kszej liczby punkt�w przez eliminacj� wrogich jendostek oraz zbieranie bonus�w.

Logujemy si� korzystaj�c z sekcji "LOGIN" podaj�c sw�j mail i has�o.

przyk�adowe konto testowe:
login "gienek@wp.pl" password "123"

Je�eli chcemy utworzy� nowe konto, musimy przej�� do sekcji login oraz wype�ni� wszystkie pola zgodnie z prawd� (sprawdzana jest d�ugo�� wprowadzanych danych oraz poprawno�� adresu e-mail) 

�eby zagra� w gr�, po rejestracji/zalogowaniu przejd� do sekcji "GAME" i kliknij w link.

Sterujemy samolotem klawiszami wsad,
	 ^
	 |
	 w
<==== A     D=====>
	S
	| 	
	V

dost�pne bronie:

j - laser
u - ulepszony laser
k - bomby


Najlepsze wyniki s� zapisywane w tablicy High Score, kt�ra jest pokazywana obok planszy/na koniec gry.



features===============================================================================

wy�wietlanie informacji o po��czeniu z db

logowanie, wylogowywanie, rejestracja
walidacje wszystkich p�l przy rejestracji warunki (3-20 znak�w), adres mailowy we w�a�ciwej formie
logowanie za pomoc� maila + has�o z bazy zapisane md5 (wprowadzamy normalne, niezakodowane has�o z kolumny passwordnotmd5)

poruszanie si� statkiem, strzelanie, wy�wietlanie liczby strza��w, trafie�, liczby punkt�w


struktury tabel====================================================================
baza danych login_db============================================
==========tabela users==========================================
pola:

id (autoincrement) 	username 	email 	password 	first_name 	last_name 	validation_code 	active 	passwordnotmd5

zapis punkt�w z gry do bazy
===============tabela wyniki====================================
pola
id(auto) username liczba_punkt�w data_gry liczba_pociskow_wystrzelonych hit_ratio

TODO====

1. niszczenie obiekt�w
2. bonusy
3. z�o�one zapytanie do tabeli z wynikami do wy�wietlenia w highscore + tabela z najlepszymi wynikami
4. CSS kolory + wersja j�zykowa
5. collisionDetection 
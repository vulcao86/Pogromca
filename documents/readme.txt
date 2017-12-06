pwi projekt 2017

Pogromca
Gra zrêcznoœciowa polegaj¹ca na zdobyciu jak najwiêkszej liczby punktów.

Logujemy siê korzystaj¹c z sekcji "LOGIN" podaj¹c swój mail i has³o np.
login "gienek@wp.pl" password "123"

¯eby zagraæ w grê przejdŸ do sekcji "GAME" i kliknij w link.

Sterujemy samolotem klawiszami wsad, strzelamy "j" oraz "k"

Punkty zdobywamy za pokonywanie wrogich obiektów oraz zbieranie bonusów.

Najlepsze wyniki s¹ zapisywane w tablicy High Score.

autor Piotr S³upczewski  106423


features===============================================================================

logowanie, wylogowywanie, rejestracja
walidacje wszystkich pól przy rejestracji warunki (3-20 znaków), adres mailowy we w³aœciwej formie
logowanie za pomoc¹ maila + has³o z bazy zapisane md5 (wprowadzamy normalnie z kolumny passwordnotmd5)

struktury tabel====================================================================

baza danych login_db============================================
tabela users
pola:

id (autoincrement) 	username 	email 	password 	first_name 	last_name 	validation_code 	active 	passwordnotmd5

zapis punktów z gry do bazy
tabela wyniki
pola
id(auto) username liczba_punktów data_gry liczba_pociskow_wystrzelonych hit_ratio
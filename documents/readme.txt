pwi projekt 2017

Pogromca
Gra zr�czno�ciowa polegaj�ca na zdobyciu jak najwi�kszej liczby punkt�w.

Logujemy si� korzystaj�c z sekcji "LOGIN" podaj�c sw�j mail i has�o np.
login "gienek@wp.pl" password "123"

�eby zagra� w gr� przejd� do sekcji "GAME" i kliknij w link.

Sterujemy samolotem klawiszami wsad, strzelamy "j" oraz "k"

Punkty zdobywamy za pokonywanie wrogich obiekt�w oraz zbieranie bonus�w.

Najlepsze wyniki s� zapisywane w tablicy High Score.

autor Piotr S�upczewski  106423


features===============================================================================

logowanie, wylogowywanie, rejestracja
walidacje wszystkich p�l przy rejestracji warunki (3-20 znak�w), adres mailowy we w�a�ciwej formie
logowanie za pomoc� maila + has�o z bazy zapisane md5 (wprowadzamy normalnie z kolumny passwordnotmd5)

struktury tabel====================================================================

baza danych login_db============================================
tabela users
pola:

id (autoincrement) 	username 	email 	password 	first_name 	last_name 	validation_code 	active 	passwordnotmd5

zapis punkt�w z gry do bazy
tabela wyniki
pola
id(auto) username liczba_punkt�w data_gry liczba_pociskow_wystrzelonych hit_ratio
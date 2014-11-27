@echo off
color 1e
echo +---------------------------------------------------------------------+
echo l Suchindexgenerator WE 10.04.2011 10:07:05                           l
echo +---------------------------------------------------------------------+

echo Aktion:Erzeugt automatisiert die Syntax fuer Volltextrecherche
echo Aufruf: tools\suchindex.bat
echo.
echo In Zeile 57 ist der String fuer die Volltextsuche definiert.

echo.
echo todo:
echo Die Datei suchstrings.tmp ist zu ueberpruefen und in das
echo    Java-Script offlinesearchengine_js.js einzfuegen.
echo    Manuelle Arbeiten sind in der suchstrings.tmp zuvor
echo    durchzufuehren:
echo.
echo    - Absoluten Pfad in relativen Pfad umwandeln durch Suchen 
echo       und Ersetzen
echo    - \ durch / ersetzen
echo    - Umlaute und Sonderzeichen ggf.aendern
echo    - Komma in der letzten Zeile am Zeilenende entfernen
echo.
echo                                       Viel Erfolg
echo                                       Werner Eising
pause
:---------------------------------------------------------------------
del /q s*.tmp
: Zaehler
set /A COUNTER=0

: Dateiliste generieren
FOR /F  %%A IN ('dir  /B /S "..\*.htm?"') DO call :AKTION %%A

:: schleife abgearbeitet ? dann Ergebnis anzeigen
start notepad.exe suchstrings.tmp
:aufräumen
del /q t*.tmp
exit

:---------------------------------------------------------------------
:AKTION
:---------------------------------------------------------------------
:Dateiname ermitteln
SET NAME=%1
echo %COUNTER%... bearbeite %NAME%

: Überschrift ermitteln
findstr  "<h1>" %NAME% > text.tmp

:evtl. Quellcode aus der Zeile mit der Überschrift herausrausfiltern
.\bin\sed.exe -f .\bin\sed.ini text.tmp > text1.tmp


:Suchstring schreiben                                         HIER STRING ANPASSEN!!!
FOR /F "eol=; tokens=* delims= " %%i in (text1.tmp) do @echo 		['%%i', '%NAME%'],>> suchstrings.tmp
set /A COUNTER=%COUNTER%+1

cls
goto :eof
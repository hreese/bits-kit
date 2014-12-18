BITS Behörden-IT-Sicherheitstraining

Stand: 10.12.2014
Version 3.5.0
Autoren: AK IT StGB NRW, Dr. Lutz Gollan (Behörde für Inneres und Sport, Hamburg), Werner Eising (technische Unterstützung, Stadt Coesfeld), Jörg Lekschas (Bots-Seite, Robert-Koch-Institut, Berlin).
Ansprechpartner Dr. Lutz Gollan
E-Mail: Lutz.Gollan@bis.hamburg.de

1.Überblick
Unter dem Titel „BITS Behörden-IT-Sicherheitstraining“ hat im Jahr 2006 eine Arbeitsgruppe des Arbeitskreises Informationstechnologie des Städte- und Gemeindebundes Nordrhein-Westfalen das für Unternehmen konzipierte Computersicherheitstraining „open beware!“ an die Anforderungen von Verwaltungen angepasst. Mittlerweile liegt die aktualisierte Version 3.5.0 vor. Seit Oktober 2010 wird BITS von der Kommunal Agentur NRW GmbH (http://www.kommunalagenturnrw.de) mit Unterstützung von Dr. Lutz Gollan, Behörde für Inneres und Sport, Hamburg, herausgegeben.

2.Ziel
Durch das Training sollen die Mitarbeiterinnen und Mitarbeiter von Verwaltungen, die regelmäßig an EDV-Arbeitsplätzen und insbesondere mit dem Internet beschäftigt sind, durch gezielte Information und Selbstlerneinheiten für die Sicherheitsaspekte der Computer- und Internetnutzung sensibilisiert werden.
Das Training ist kostenlos, vollständig browserbasiert und kann in jedes Intranet eingebettet werden.

3.Installation
„BITS Behörden-IT-Sicherheitstraining“ steht als ZIP-Datei zur Verfügung. Für die Mitarbeiterschaft kann es auf einem Server, einem Arbeitsplatz oder auf einem Wechselspeichermedium (DVD, USB-Stick) entpackt werden. Da „BITS Behörden-IT-Sicherheitstraining“ HTML-basiert ist, kann es problemlos in einen Intranetauftritt integriert werden.

BITS kann auch auf ein Microsoft Sharepoint-Verzeichnis geladen und direkt dort aufgerufen werden. Für diesen Fall ist jedoch der Ordner "tools" vorher zu löschen. Er beinhaltet Dateien (.bat und .exe), die von Sharepoint nicht akzeptiert werden. 

Vor der Freigabe für die Mitarbeiterschaft sollte die Seite „Ansprechpersonen“ für die entsprechende Verwaltung angepasst werden. Dies ist die Datei „index.htm“ im Pfad „allgemeines\ansprechpartner“. Hierzu sind HTML-Kenntnisse erforderlich. Gleiches gilt für den Fall, dass anders lautende Dienstvereinbarungen oder -anweisungen, insbesondere für die Kapitel "E-Mail" und "Vertrauliche Daten", existieren. Diese und weitere Dokumente können über die Seite "allgemeines\dokumente" verlinkt werden. Das Logo im Kopf von BITS ist die Datei kopfbild.jpg im Pfad "\images\individuell". Bitte bedenken Sie, dass BITS nur ein Angebot darstellt und leicht auf die lokalen Anforderungen hin angepasst werden kann.

Über die Herausgeber bzw. den oben genannten Ansprechpartner kann der MD5-Hashwert der BITS-Version abgefragt werden. Dadurch soll verhindert werden, dass eine manipulierte BITS-Version heruntergeladen bzw. eingesetzt wird.

4. Bedienung und technische Anforderungen
Die Bedienung von „BITS Behörden-IT-Sicherheitstraining“ erfolgt durch den Aufruf der „index.html“-Seite (unmittelbar oder durch Verlinkung hierauf). Anschließend können die weitestgehend barrierefreien Seiten durch die Maus oder durch Tastaturbefehle genutzt werden.
„BITS Behörden-IT-Sicherheitstraining“ unterstützt grunsätzlich jeden Browser. JavaScript muss jedoch aktiviert sein, andernfalls kommt es bei der Navigation und bei den Wissenstests zu Problemen. Eine Soundkarte bzw. Lautsprecher sind zur Nutzung nicht erforderlich. Es wird eine Bildschirmauflösung von 1280x1024 Punkten empfohlen.

„BITS Behörden-IT-Sicherheitstraining“ wurde getestet mit den Browsern MS Internet Explorer, Opera, Mozilla Firefox, Chrome und Konqueror.

5. Suchfunktion
Die Suchfunktion ("suche.htm" im Hauptverzeichnis) erlaubt eine Offline-Suche aller BITS-Seiten. Hierfür sind in allen Seiten, die durchsucht werden sollen, im Bereich class=mittecontent01 die Inhalte mit dem <content>-Tag einzuschließen. Dies ist für alle Lektionen bereits erfolgt; eigene Seiten, die ebenfalls durchsucht werden sollen, wären entsprechend anzupassen. Sofern neue Seiten zu BITS lokal hinzugefügt werden muss, das Javascript offlinesearchengine_js.js um den Titel und den jeweiligen Dateinamen ergänzt werden. Dies kann auch halbautomatisiert durch das im Ordner tools liegende suchindex.bat erfolgen. Bei einigen Opera-Versionen kann es zu Fehlermeldungen bei der Nutzung der Suche kommen. In der PDF-Datei "BITS-Opera-Einstellungen-Suche.pdf" wird die Abhilfe beschrieben.

6. "Gewinnspiel"
Es besteht die Möglichkeit, dass bei den Wissenschecks am Ende der Lektionen bei Anklicken der richtigen Antwort ein Buchstabe (= eine Bild-Datei) eingeblendet wird. Wenn die entsprechenden Buchstaben durch den Nutzer innerhalb eines Gewinnspiels der Behörde eingesendet werden, kann so ein Anreiz zur Nutzung von BITS geschaffen werden. Hierfür muss zuvor im jeweiligen Unterordner "loesungswort" der Lektionen (alle außer "Am Arbeitsplatz") die zur jeweiligen Frage gehörende, nummerierte GIF-Datei durch eine GIF-Datei mit dem richtigen Lösungsbuchstaben ausgetauscht werden. Beispiel: Bei der 2. Testfrage der Lektion "E-Mail" soll als Lösungsbuchstabe ein "B" erscheinen. Im Unterordner "loesungswort" zur Lektion "E-Mail" ist die Datei "2.gif" durch ein GIF-Bild des Buchstabens "B" auszutauschen und in "2.gif" umbenennen. Im Ordner bits\images\buchstaben finden Sie alle Buchstaben und diverse Sonderzeichen, die Sie kopieren können. Derzeit gibt es sieben Wissenschecks mit insgesamt 29 Fragen, so dass ein Satz mit 29 Zeichen als Lösung gewählt werden sollte. Auf der Startseite der Tests befindet sich im HTML-Code ausgeklammerter Text, der aktiviert werden muss.

7. BITS-Portal
Für Administratoren steht kostenfrei das BITS-Portal http://www.bits-portal.eu zur Verfügung. Dort werden Beta-Versionen, neue Funktionen und Inhalte diskutiert und auch alternative Versionen zum Download bereitgehalten.

8.Rechtliches
„BITS Behörden-IT-Sicherheitstraining“ basiert auf open beware!, das von der BDG GmbH & Co. KG, jetzt NTT Com Security (Germany) GmbH, herausgegeben wurde. open beware! steht unter der GNU Public License (GPL, siehe http://www.fsf.org). Somit steht auch „BITS Behörden-IT-Sicherheitstraining“ unter dieser Lizenz und darf von Dritten kostenfrei veröffentlicht, vervielfältigt, weitergegeben und modifiziert werden, unter der Bedingung, dass auch die Änderungen unter der GPL stehen müssen.

Änderungs- oder Ergänzungswünsche nimmt Dr. Lutz Gollan (Lutz.Gollan@bis.hamburg.de) gerne entgegen.

-------------------------------------------------------------

CHANGELOG

Aufgrund der Vielzahl von Änderungen liegt kein Changelog für diese Version vor.





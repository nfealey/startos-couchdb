import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.5.3:0',
  releaseNotes: {
    en_US:
      '- Updates CouchDB to 3.5.3, a security release that fixes six vulnerabilities, including a denial of service any client can trigger without logging in, and a flaw that let a CouchDB admin run shell commands inside the container. Updating is strongly recommended.',
    es_ES:
      '- Actualiza CouchDB a 3.5.3, una versión de seguridad que corrige seis vulnerabilidades, entre ellas una denegación de servicio que cualquier cliente puede provocar sin iniciar sesión y un fallo que permitía a un administrador de CouchDB ejecutar comandos de shell dentro del contenedor. Se recomienda encarecidamente actualizar.',
    de_DE:
      '- Aktualisiert CouchDB auf 3.5.3, eine Sicherheitsversion, die sechs Schwachstellen behebt – darunter eine Denial-of-Service-Lücke, die jeder Client ohne Anmeldung auslösen kann, und einen Fehler, durch den ein CouchDB-Administrator Shell-Befehle im Container ausführen konnte. Ein Update wird dringend empfohlen.',
    pl_PL:
      '- Aktualizuje CouchDB do wersji 3.5.3, wydania bezpieczeństwa naprawiającego sześć luk, w tym odmowę usługi, którą każdy klient może wywołać bez logowania, oraz błąd pozwalający administratorowi CouchDB uruchamiać polecenia powłoki w kontenerze. Aktualizacja jest zdecydowanie zalecana.',
    fr_FR:
      "- Met à jour CouchDB vers 3.5.3, une version de sécurité qui corrige six vulnérabilités, dont un déni de service que tout client peut déclencher sans se connecter et une faille permettant à un administrateur CouchDB d'exécuter des commandes shell dans le conteneur. La mise à jour est fortement recommandée.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})

export default function Home() {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">React und Formulare</h1>
        <p className="lead">
          Welche Unterstützung gibt uns die Library React beim Einsatz von
          HTML-Formularen?
        </p>
        <hr className="my-4" />
        <p>
          React bietet uns verschiedene Techniken zur Behandlung von Formularen.
          Das Beispiel-Projekt demonstriert jeweils Aspekte wie Datenübergabe
          und -übernahme, Validierung und schließlich der Darstellung des
          Validierungs-Status.
        </p>
        <p>
          Da diese Techniken einiges an Boilerplate-Code erfordern, beleuchtet
          das Demo-Projekt ebenso alternative zusätzliche Form-Bibliotheken aus
          der Community.
        </p>
      </div>
    </>
  );
}

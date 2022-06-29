export default function Plain() {
  const frameworks = [
    {
      id: 1,
      name: 'Angular',
      url: 'https://angular.io',
    },
    {
      id: 2,
      name: 'React',
      url: 'https://reactjs.org/',
    },
    {
      id: 3,
      name: 'Vue.js',
      url: 'https://vuejs.org/',
    },
  ];

  return (
    <>
      <section>
        <h2>Plain HTML Formular</h2>
        <hr />
      </section>
      <form className="p-4">
        <fieldset>
          <legend>Registrierung</legend>
          <div className="form-group">
            <label htmlFor="acc">Account Name</label>
            <input
              type="text"
              required
              minLength={3}
              className="form-control"
              id="acc"
              name="acc"
              placeholder="Enter account name"
            />
            <div className="invalid-feedback">
              Wenigstens drei Zeichen müssen es bitte sein.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Adresse</label>
            <input
              type="email"
              required
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <div className="invalid-feedback">Ungültige Email-Adresse</div>
            <small id="emailHelp" className="form-text text-muted">
              Deine Email-Adresse bleibt bei uns, wir teilen sie niemals.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="pw1">Passwort</label>
            <input
              type="password"
              minLength={8}
              required
              className="form-control"
              id="pw1"
              name="pw"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pw2">Passwort (Wiederholung)</label>
            <input
              type="password"
              className="form-control"
              id="pw2"
              placeholder="Password"
            />
            <div className="invalid-feedback">
              Passwörter stimmen nicht überein.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="zip">PLZ</label>
            <input
              type="text"
              pattern="\d{5}"
              className="form-control"
              id="zip"
              name="zip"
              placeholder="Postleitzahl"
            />
            <div className="invalid-feedback">
              Bitte eine korrekte PLZ angeben.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="framework">Lieblings SPA-Framework</label>
            <select
              className="custom-select"
              id="framework"
              name="framework"
              required
            >
              <option selected disabled value="">
                Bitte wählen ...
              </option>
              {frameworks.map((fw) => (
                <option key={fw.id} value={fw.id}>
                  {fw.name}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">
              Bitte ein Framework auswählen.
            </div>
          </div>
          <div className="actions d-flex justify-content-end pt-2">
            <button type="submit" className="btn btn-primary">
              Absenden
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

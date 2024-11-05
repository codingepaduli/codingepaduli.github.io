var nomeFileModuloRichiestaResetPassword = 'Reimposta password studente';
var nomeFileExcelResetPassword = 'Reimposta password studente (Risposte)';
var nomeFoglioExcelResetPassword = 'Risposte del modulo 1'

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Funzioni utente')
  .addItem('1 - Concedi autorizzazioni', 'concediAutorizzazioni')
  .addItem('2 - Imposta primo avvio', 'impostaPrimoAvvio')
  .addToUi()
}

function reimpostaPassword(e) {
  
  // variabili da modificare con i dati dell'Istituto
  var uoDocenti = '/Docenti';
  var uoAlunni = '/Studenti';
  var emailAdmin = 'supporto@digitale';


  
  // dati delle risposte al modulo
  var timestamp = e.values[0];
  var richiedente = e.values[1];
  var accountReimpostazione = e.values[2].trim();
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var foglioRisposte1 = ss.getSheetByName('Risposte del modulo 1');
  var cellaEsito = foglioRisposte1.getRange(foglioRisposte1.getLastRow(), 4);
  var urlModulo = FormApp.openById((DriveApp.getFileById(ss.getId()).getParents().next().getFilesByName(nomeFileModuloRichiestaResetPassword).next().getId())).getPublishedUrl();
  
  // controlla se il richiedente è autorizzato
  var utenteAutorizzato = verificaOrganizzazioneUtente(richiedente, uoDocenti);
  if (!utenteAutorizzato) {
    let oggetto = 'Operazione non autorizzata';
    let messaggio = `<p>Hai chiesto di reimpostare la password per l'account ${accountReimpostazione}, ma non sei 
    autorizzato a farlo.<br />Solo i docenti possono utilizzare il modulo dedicato.</p>
    <p>Se sei un docente e ritieni di ricevere questa email 
    per errore, segnala il problema all'amministratore di G Suite:<br />${emailAdmin}</p>`;
    let esito = 'richiedente non autorizzato';
    
    inviaEmail(richiedente, oggetto, messaggio);
    cellaEsito.setValue(esito);
    
    return;
  
  } else {
    var insegnante = richiedente;
  }
  
  
  //controlla che l'accountReimpostazione esista
  
  try {
    var esistente = AdminDirectory.Users.get(accountReimpostazione);
  }
  catch (e) {
    let oggetto = 'Operazione non autorizzata';
    let messaggio = `<p>Hai chiesto di reimpostare la password per l'account ${accountReimpostazione}, ma l'account risulta inesistente.<br />
      Prova a compilare nuovamente il <a href=${urlModulo}>modulo</a>, verificando di inserire correttamente l'indirizzo email dell'alunno.</p>
    <p>Se ritieni che questo sia un errore, segnala il problema all'amministratore di G Suite:<br />${emailAdmin}</p>`;
    let esito = 'reimpostazione non autorizzata - account inesistente';
    
    inviaEmail(richiedente, oggetto, messaggio);
    cellaEsito.setValue(esito);
    
    return;
  }
  
  
  // controlla che l'accountReimpostazione sia uno studente
  var reimpostazioneValida = verificaOrganizzazioneUtente(accountReimpostazione, uoAlunni);
  if (!reimpostazioneValida) {
    let oggetto = 'Operazione non autorizzata';
    let messaggio = `<p>Hai chiesto di reimpostare la password per l'account ${accountReimpostazione}, ma non risulta essere l'account di un alunno.<br />
    Il modulo può essere utilizzato solo per reimpostare la password degli alunni.</p>
    <p>Se ritieni che questo sia un errore, segnala il problema all'amministratore di G Suite:<br />${emailAdmin}</p>`;
    let esito = 'reimpostazione non autorizzata - non è studente';
    
    inviaEmail(richiedente, oggetto, messaggio);
    cellaEsito.setValue(esito);
    
    return;
    
  } else {
    var studente = accountReimpostazione;
  }
  
  
  // ----- se tutto ok, procede alla reimpostazione della password
  
  // genera la nuova password
  var password = ''; 
  var caratteriPassword = "123456789ABCDEFGHIJKLMNPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; 

  for (var j = 0; j < 8; j++) { 
    var posizioneCasuale = Math.floor(Math.random() * caratteriPassword.length); 
    password += caratteriPassword.substring(posizioneCasuale, posizioneCasuale + 1); 
  }
    
  // reimposta la password dell'utente
  var user = AdminDirectory.Users.get(studente); 
  user.password = password; 
  user.changePasswordAtNextLogin = true;
  AdminDirectory.Users.update(user, studente);
  
  // invia email con la nuova password provvisoria 
  let oggetto = `Reimpostazione della password per l'account ${studente} effettuata correttamente`;
  let messaggio = `<p>Hai richiesto la reimpostazione della password per l'account ${studente}. L'operazione è andata a buon fine.</p>
  <p>La password provvisoria è questa:<br />${password}</p>
  <p>Puoi inviare questa password allo studente o alla famiglia. Utilizzerà questa password per il prossimo accesso, poi dovrà cambiarla con una personalizzata.</p>
  <p>Ricorda di consegnare la password direttamente allo studente o a un genitore. Non va consegnata ad altri familiari o richiedenti.</p>`;
  let esito = `password reimpostata correttamente`;
  
  inviaEmail(insegnante, oggetto, messaggio);
  cellaEsito.setValue(esito);
  
  
}


// ----- funzioni ausiliarie

function verificaOrganizzazioneUtente(account, uo) {
  // controlla se appartiene ad un'unità organizzativa elencata nel foglio apposito, o ad una loro sotto-unità organizzativa
  var organizzazioneUtente = AdminDirectory.Users.get(account).orgUnitPath;
  // indexOf anzichè semplice includes, per testare se appartiene a sotto-unità organizzativa di una unità organizzativa presente nella lista
  return (organizzazioneUtente.indexOf(uo) > -1);
}


function inviaEmail(email, oggetto, messaggio) {
  GmailApp.sendEmail(email, oggetto, messaggio, {htmlBody: messaggio});
}


function concediAutorizzazioni() {
  
}

function impostaPrimoAvvio() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var props = PropertiesService.getScriptProperties();
  verificaTrigger(props);
  var impostazioniOk = props.getProperty('impostazioniOk');
  if (!impostazioniOk) {
    DriveApp.getFileById(ss.getId()).getParents().next().getFilesByName(nomeFileModuloRichiestaResetPassword).next().setName(nomeFileModuloRichiestaResetPassword);
    DriveApp.getFileById(ss.getId()).getParents().next().getFilesByName(nomeFileExcelResetPassword).next().setName(nomeFileExcelResetPassword);
    props.setProperty('impostazioniOk', true);
  }
}

// ----- verifica esistenza trigger, altrimenti lo crea

function verificaTrigger(props) {
  
  // cerca se già impostato trigger per funzione principale, altrimenti lo crea e memorizza creazione avvenuta in una proprietà
  if (props.getProperty('triggerPresente')) {
    return;  
  }
      
  var triggers = ScriptApp.getProjectTriggers();
  if (triggers.length > 0) {
    for (i = 0; i < triggers.length; i ++) {
      if (triggers[i].getHandlerFunction() == 'reimpostaPassword') {
        props.setProperty('triggerPresente', true);
      }
    }
  }
  
  if (triggers.length == 0 || !(props.getProperty('triggerPresente'))) {
    ScriptApp.newTrigger('reimpostaPassword')
      .forSpreadsheet(SpreadsheetApp.getActive())
      .onFormSubmit()
      .create();
      props.setProperty('triggerPresente', true);
  }
}


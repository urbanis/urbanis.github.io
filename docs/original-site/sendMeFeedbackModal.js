function prepareAndOpenEmail() {
    const reachMeOutModalMessageId = 'reachMeOutModalMessage'; // Id del textarea del mensaje.
    const message = encodeURIComponent(document.getElementById(reachMeOutModalMessageId).value);
    const mailToHref = `mailto:nisleida.morales@gmail.com?subject=Feedback&body=${message}`;
    window.location.href = mailToHref;
    const emptyValue = '';
    document.getElementById(reachMeOutModalMessageId).value = emptyValue; // limpio los campos
  }
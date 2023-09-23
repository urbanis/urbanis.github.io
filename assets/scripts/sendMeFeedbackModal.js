function prepareAndOpenEmail() {
    const reachMeOutModalEmailAddressId = 'reachMeOutModalEmailAddress'; // Id del input del email.
    const reachMeOutModalMessageId = 'reachMeOutModalMessage'; // Id del textarea del mensaje.

    const emailAddress = encodeURIComponent(document.getElementById(reachMeOutModalEmailAddressId).value); 
    const message = encodeURIComponent(document.getElementById(reachMeOutModalMessageId).value);

    const mailToHref = `mailto:nisleida.morales@gmail.com?subject=Feedback&body=${message}`;
    window.location.href = mailToHref;

    const emptyValue = '';
    document.getElementById(reachMeOutModalEmailAddressId).value = emptyValue;
    document.getElementById(reachMeOutModalMessageId).value = emptyValue; // limpio los campos
  }
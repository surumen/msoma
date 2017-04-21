/* JavaScript module for popup window */

function bringPopupToTop() {
  /* If popup is already loaded, and user clicks on 
     a link which launches the popup, the popup
     may fall behind other windows.  To bring popup to top,
     call this function in onload or ready event of popup. */

  if (window.name == "popupwindow") {
    /* focus() works in IE and Firefox, not in Safari or Chrome; do whatever works */
    window.focus();

    /* call resizeBy (preferred) or resizeTo to bring window to top */
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
      /* Google Chrome: resizeTo() used to work, but no longer.  See new fix in launchPopup(). */
      ; /* window.resizeTo(window.outerWidth,window.outerHeight); */
    else
      /* Safari */
      window.resizeBy(0,0);
  }
}

var popupwindowRef=null;

function launchPopup(url,ileft,itop,iwidth,iheight) {
  /* Launch popup window, then set focus (if window was already open).
     Call to .focus() works in some but not all browsers; to be sure, 
     call bringPopupToTop() in popup's onload or ready event. */

  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
  {
    if (popupwindowRef) {
      /* Google Chrome: close old then create new window, which always gets the focus. */
      popupwindowRef.close();
      popupwindowRef = null;
    }
  }

  popupwindowRef = window.open(url,'popupwindow','left='+ileft+',top='+itop+',width='+iwidth+',height='+iheight+',resizable=1,scrollbars=1');
  if (window.focus) {popupwindowRef.focus();}
}
// Look for redmine description
var metadesc = document.evaluate('//meta[@name=\'description\']', document, null, 4, null).iterateNext();

if (metadesc != null && metadesc.attributes["content"].value == "Redmine")
{

  // Clean up title
  document.title = document.title.replace(/^.+\#([0-9]+): (?:[A-Z0-9]{6,8} \- )?/, "$1: ");

  // Searches always occur in a new tab
  var searchForm = document.evaluate('//div[@id=\'quick-search\']//form', document, null, 4, null).iterateNext();
  searchForm.setAttribute('target', '_blank');

  if (window.location.href.indexOf("issues") != -1) {

    ticket = window.location.pathname.match(/\/([0-9]+)$/);
    var titleobj = document.evaluate('//div[contains(@class,\'subject\')]//h3', document, null, 4, null).iterateNext();
    title = titleobj.innerText;

    titleobj.innerText = "";
    titleobj.innerHTML = '<input type="text" readonly="readonly" style="font: inherit; font-weight: bold; border:none; background:transparent;"></input>';

    var titleobjinput = document.evaluate('//div[contains(@class,\'subject\')]//h3/input', document, null, 4, null).iterateNext();
    titleobjinput.style.width = "88%";
    titleobjinput.onclick = function() {
      titleobjinput.select();
      return false;
    };
    titleobjinput.value = "refs #" + ticket[1] + ": " + title;

  }

}
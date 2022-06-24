const select = document.querySelector("select");
const allLang = ["ua", "en", "es"];

select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ua";
    location.reload();
  }
  select.value = hash;
  document.querySelector("title").innerHTML = langArr["title"][hash];

  //   document.querySelector(".li-main").innerHTML = langArr["liMain"][hash];
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
    // document.querySelector(".lng-" + key).innerHTML = langArr[key][hash];
  }
}
changeLanguage();

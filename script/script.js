var themeMap = { dark: "light", light: "dark" };

var theme = localStorage.getItem('theme') || (tmp = Object.keys(themeMap)[0], localStorage.setItem('theme', tmp),tmp);
var bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  var current = localStorage.getItem('theme');
  var next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;

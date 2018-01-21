function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div 0')
}

function increaseRankBy(n) {
  var integer = parseInt(n);
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i]) + integer;
}

}

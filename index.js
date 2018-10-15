const getFirstSelector = (selector) => {
 return document.querySelector(selector);

};

const nestedTarget = () => {
  return document.querySelector('#nested .target');
};

const deepestChild = () => {
  let node = document.querySelector('#grand-node');
  let next = node.querySelector('div');
  while (next) {
    node = next;
    next = node.querySelector('div');
  }
  return node;
};

const increaseRankBy = (n) => {
  const targets = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < targets.length; i++) {
    targets[i].innerHTML = parseInt(targets[i].innerHTML) + n;
  }
};

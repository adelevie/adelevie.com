document.addEventListener("DOMContentLoaded", function() {
  hljs.initHighlightingOnLoad();
  anchors.options = {
    visible: 'always',
    placement: 'left',
    icon: '¶'
  };
  anchors.add('p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6');
});

/*jslint browser: true */

function FlowCopy(original) {
  // prepare copy (placeholder), which is just a super simple empty shadow element
  var original_style = window.getComputedStyle(original);
  var copy = this.copy = document.createElement('div');
  copy.setAttribute('class', 'flow-copy');
  copy.setAttribute('style', 'height: ' + original_style.height);
  original.parentNode.insertBefore(copy, original.nextSibling);
  var resize_queued = false;
  // listen for changes to original
  this.observer = new MutationObserver(function() {
    if (!resize_queued) {
      window.requestAnimationFrame(function() {
        var original_style = window.getComputedStyle(original);
        copy.style.height = original_style.height;
        resize_queued = false;
      });
    }
  }).observe(original, {
    childList: true,
    subtree: true,
  });
}

exports.FlowCopy = FlowCopy;

if (typeof angular !== 'undefined') {
  /** This directive is intended to be used with a `position: absolute` or
  `position: fixed` element, so that even when it drops out of flow, an empty
  placeholder element is created in its current position to keep its place.

  <nav fixedflow>
    <a href="/admin/individuals">Individuals</a>
    <a href="/admin/administrators">Administrators</a>
  </nav>
  */
  angular.module('flow-copy', []).directive('fixedflow', function() {
    return {
      link: function(scope, el) {
        new FlowCopy(el[0]);
      }
    };
  });
}

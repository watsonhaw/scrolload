(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('Scrolload', factory) :
  (global.Scrolload = factory());
}(this, function () { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Scrolload = function () {
      function Scrolload(options) {
          classCallCheck(this, Scrolload);

          var ops = $.extend(true, {
              page: 1,
              count: 10,
              tpl: function tpl(item) {
                  return '\n                    <div class="item">item ' + item + '</div>\n                ';
              },
              onLoading: function onLoading() {
                  console.log('loading...');
              },
              onLoaded: function onLoaded() {
                  console.log('loaded');
              },
              onNoMore: function onNoMore() {
                  console.log('no more data');
              }
          }, options);

          this.page = ops.page;
          this.count = ops.count;
          this.data = ops.data;
          this.totalPage = Math.ceil(this.data.length / this.count);
          this.$container = $(ops.container);
          this.tpl = ops.tpl;
          this.isLoading = false;

          // hooks
          this.onLoading = ops.onLoading;
          this.onLoaded = ops.onLoaded;
          this.onNoMore = ops.onNoMore;

          this.render().onScroll();
      }

      createClass(Scrolload, [{
          key: 'render',
          value: function render() {
              var data = void 0,
                  tpl = void 0,
                  start = (this.page - 1) * this.count,
                  end = this.page * this.count,
                  total = this.data.length;
              end = end > total ? total : end;
              data = this.data.slice(start, end);
              tpl = this.template(data);
              this.append(tpl);
              return this;
          }
      }, {
          key: 'template',
          value: function template(data) {
              var _this = this;

              var tpl = '',
                  htmls = [];
              console.log(this);
              data.map(function (item) {
                  tpl = _this.tpl(item);
                  htmls.push(tpl);
                  tpl = '';
              });
              return htmls.join('');
          }
      }, {
          key: 'append',
          value: function append(tpl) {
              $(tpl).appendTo(this.$container);
              this.page++;
              this.isLoading = false;
          }
      }, {
          key: 'onScroll',
          value: function onScroll() {
              var _this2 = this;

              $(window).on('scroll', function () {
                  var bodyHeight = $('body').height(),
                      winHeight = $(window).height(),
                      scrollTop = $(window).scrollTop(),
                      thresold = bodyHeight - winHeight - scrollTop;
                  console.log(thresold);
                  if (thresold < 20 && !_this2.isLoading) {
                      _this2.isLoading = true;
                      // hooks
                      _this2.onLoading();
                      if (_this2.totalPage >= _this2.page) {
                          setTimeout(function () {
                              _this2.render();
                              // hooks
                              _this2.onLoaded();
                          }, 500);
                      } else {
                          // hooks
                          _this2.onNoMore();
                      }
                  }
              });
          }
      }]);
      return Scrolload;
  }();

  return Scrolload;

}));
//# sourceMappingURL=scrolload.js.map
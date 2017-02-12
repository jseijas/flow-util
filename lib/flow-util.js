'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlowUtil = function () {
  function FlowUtil() {
    _classCallCheck(this, FlowUtil);
  }

  _createClass(FlowUtil, null, [{
    key: 'traverse',
    value: function traverse(name, obj, fn) {
      if (!fn) {
        fn = obj;
        obj = name;
        name = '';
      }
      if (_lodash2.default.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
          var objName = name + '[' + i + ']';
          obj[i] = fn(objName, obj[i]);
          FlowUtil.traverse(objName, obj[i], fn);
        }
      } else if (_lodash2.default.isPlainObject(obj)) {
        for (var propname in obj) {
          var _objName = name === '' ? propname : name + '.' + propname;
          obj[propname] = fn(_objName, obj[propname]);
          FlowUtil.traverse(_objName, obj[propname], fn);
        }
      }
    }
  }]);

  return FlowUtil;
}();

exports.default = FlowUtil;
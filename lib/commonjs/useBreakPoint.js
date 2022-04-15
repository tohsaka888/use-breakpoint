"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var defaultBreakPoints = {
  xs: 576,
  sm: 768,
  md: 960,
  lg: 1200,
  xl: 1400,
  xxl: 1600
};

function useBreakPoint() {
  var breakPoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBreakPoints;

  var _useState = (0, _react.useState)(window.innerWidth),
      _useState2 = _slicedToArray(_useState, 2),
      currentWidth = _useState2[0],
      setCurrentWidth = _useState2[1];

  var _useState3 = (0, _react.useState)("xl"),
      _useState4 = _slicedToArray(_useState3, 2),
      size = _useState4[0],
      setSize = _useState4[1];

  var deferedWidth = (0, _react.useDeferredValue)(currentWidth);
  var deferedSize = (0, _react.useDeferredValue)(size);
  (0, _react.useEffect)(function () {
    window.addEventListener("resize", function () {
      setCurrentWidth(window.innerWidth);
    });
  }, []);
  (0, _react.useEffect)(function () {
    var keys = Object.keys(breakPoints);

    for (var i = 0; i < Object.keys(breakPoints).length; i++) {
      if (breakPoints[keys[i]] && currentWidth < breakPoints[keys[i + 1]]) {
        setSize(keys[i]);
        break;
      }
    }
  }, [deferedWidth]);
  return [deferedWidth, deferedSize];
}

var _default = useBreakPoint;
exports["default"] = _default;
//# sourceMappingURL=useBreakPoint.js.map
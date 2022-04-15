import { useDeferredValue, useEffect, useState } from "react";
var defaultBreakPoints = {
    xs: 576,
    sm: 768,
    md: 960,
    lg: 1200,
    xl: 1400,
    xxl: 1600,
};
function useBreakPoint(breakPoints) {
    if (breakPoints === void 0) { breakPoints = defaultBreakPoints; }
    var _a = useState(window.innerWidth), currentWidth = _a[0], setCurrentWidth = _a[1];
    var _b = useState("xl"), size = _b[0], setSize = _b[1];
    var deferedWidth = useDeferredValue(currentWidth);
    var deferedSize = useDeferredValue(size);
    useEffect(function () {
        window.addEventListener("resize", function () {
            setCurrentWidth(window.innerWidth);
        });
    }, []);
    useEffect(function () {
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
export default useBreakPoint;
//# sourceMappingURL=useBreakPoint.js.map
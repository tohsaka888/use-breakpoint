declare type BreakPointConfig = {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
};
declare function useBreakPoint(breakPoints?: BreakPointConfig): (string | number)[];
export default useBreakPoint;

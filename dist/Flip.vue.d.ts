import { validateWidth, validateHeight, validateTransitionDuration } from "../assets/js/validator";
declare type cssObject = {
    [key: string]: string | number;
};
declare const _default: import("vue").DefineComponent<{
    activeClick: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    activeHover: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    horizontal: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        required: true;
        validator: typeof validateWidth;
    };
    height: {
        type: StringConstructor;
        required: true;
        validator: typeof validateHeight;
    };
    transition: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: typeof validateTransitionDuration;
    };
    modelValue: {
        type: BooleanConstructor;
        required: false;
    };
}, unknown, {
    hover: boolean;
}, {
    computedFlippterStyle(): cssObject;
    computedBackStyle(): cssObject;
    computedFrontStyle(): cssObject;
}, {
    handleClick(): void;
    handleMouseLeave(): void;
    handleMouseEnter(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    activeClick: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    activeHover: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    horizontal: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        required: true;
        validator: typeof validateWidth;
    };
    height: {
        type: StringConstructor;
        required: true;
        validator: typeof validateHeight;
    };
    transition: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: typeof validateTransitionDuration;
    };
    modelValue: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    modelValue: boolean;
    activeClick: boolean;
    activeHover: boolean;
    horizontal: boolean;
    transition: string;
}>;
export default _default;

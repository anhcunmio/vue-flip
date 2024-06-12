import { defineComponent as s, h as t } from "vue";
function r(e) {
  return /(%|Q)$/i.test(e) ? !isNaN(parseFloat(e.slice(0, -1))) : /(px|cm|mm|in|pc|pt|em|ex|ch|lh|vh|vw)$/i.test(e) ? !isNaN(parseFloat(e.slice(0, -2))) : /(rem|vmin|vmax)$/i.test(e) ? !isNaN(parseFloat(e.slice(0, -3))) : ["max-content", "min-content", "available", "fit-content", "auto", "inherit", "initial", "unset"].includes(e);
}
function a(e) {
  return r(e);
}
function o(e) {
  return r(e);
}
function l(e) {
  return /[0-9]s$/i.test(e) ? !isNaN(parseFloat(e.slice(0, -1))) : /(ms)$/i.test(e) ? !isNaN(parseFloat(e.slice(0, -2))) : e === "0";
}
const i = {
  "transform-style": "preserve-3d",
  backfaceVisibility: "hidden",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
}, h = s({
  name: "flip",
  props: {
    activeClick: {
      type: Boolean,
      required: !1,
      default: !1
    },
    activeHover: {
      type: Boolean,
      required: !1,
      default: !1
    },
    horizontal: {
      type: Boolean,
      required: !1,
      default: !1
    },
    width: {
      type: String,
      required: !0,
      validator: a
    },
    height: {
      type: String,
      required: !0,
      validator: o
    },
    transition: {
      type: String,
      required: !1,
      default: "0.5s",
      validator: l
    },
    modelValue: {
      type: Boolean,
      required: !1
    }
  },
  computed: {
    computedFlippterStyle() {
      const e = {
        transition: "0.6s",
        "transform-style": "preserve-3d",
        position: "relative",
        width: "100%",
        height: "100%",
        "transition-duration": this.transition,
        transform: ""
      };
      return this.hover && this.horizontal ? e.transform = "rotateX(180deg)" : this.hover && (e.transform = "rotateY(180deg)"), e;
    },
    computedBackStyle() {
      return {
        ...i,
        "z-index": this.modelValue ? 2 : 1,
        transform: "rotateY(180deg)"
      };
    },
    computedFrontStyle() {
      return {
        ...i,
        "z-index": this.modelValue ? 1 : 2,
        transform: "rotateY(0deg)"
      };
    }
  },
  render() {
    return t(
      "div",
      {
        class: `${this.activeHover ? "active-hover " : ""}${this.hover ? "hover" : ""} ${this.horizontal ? "horizontal" : ""}`,
        style: `perspective: 1000; width: ${this.width}; height: ${this.height}`,
        onClick: this.handleClick,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave
      },
      t(
        "div",
        {
          class: "flipper",
          style: this.computedFlippterStyle
        },
        [
          t(
            "div",
            {
              class: "front",
              style: this.computedFrontStyle
            },
            this.$slots.front ? this.$slots.front() : ""
          ),
          t(
            "div",
            {
              class: "back",
              style: this.computedBackStyle
            },
            this.$slots.back ? this.$slots.back() : ""
          )
        ]
      )
    );
  },
  data() {
    return {
      hover: !1
    };
  },
  methods: {
    handleClick() {
      this.activeClick && (this.hover = !this.hover, this.$emit("update:modelValue", this.hover));
    },
    handleMouseLeave() {
      this.activeHover && (this.hover = !this.hover, this.$emit("update:modelValue", this.hover));
    },
    handleMouseEnter() {
      this.activeHover && (this.hover = !this.hover, this.$emit("update:modelValue", this.hover));
    }
  },
  mounted() {
    this.modelValue && (this.hover = this.modelValue);
  },
  watch: {
    modelValue(e) {
      this.hover = e;
    }
  }
});
export {
  h as VueFlip
};

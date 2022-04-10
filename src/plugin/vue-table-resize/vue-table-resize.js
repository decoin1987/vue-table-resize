import SETTING from "./modules/settings";

export default {
  install(Vue, options) {
    Vue.directive("resizable", {
      bind(table, binding, vnode) {
        const OPTIONS = {};
        for (let el in SETTING) {
          OPTIONS[el] = table.hasAttribute(el)
            ? table.getAttribute(el.toLowerCase())
            : SETTING[el];
        }
        const GRIP_CLASS = "." + OPTIONS.gripClass;
        let TH_EL;
        let START_X;

        table.className = OPTIONS.tableClass;
        if (options?.tableId) {
          table.id = options.tableId;
        }

        table.querySelectorAll("table th").forEach((th) => {
          th.style.position = "relative";
          let grip = document.createElement(OPTIONS.gripTagName);
          grip.className = OPTIONS.gripClass;
          grip.addEventListener("mousedown", (el) => {
            if (el) {
              TH_EL = th;
              el.target.classList.add(OPTIONS.gripActiveClass);
              START_X = el.pageX - th.offsetWidth;
            }
          });
          grip.addEventListener("dblclick", () => {
            th.style.width = "";
          });
          th.appendChild(grip);
        });

        const HANDLERS =
          (vnode.data && vnode.data.on) ||
          (vnode.componentOptions && vnode.componentOptions.listeners);

        const emit = (EMITTER_NAME, data = {}) => {
          if (HANDLERS && HANDLERS[EMITTER_NAME]) {
            HANDLERS[EMITTER_NAME](data);
          }
        };

        document.addEventListener("mousemove", (el) => {
          if (TH_EL) {
            TH_EL.style.width = el.pageX - START_X + "px";
          }
        });

        document.addEventListener("mouseup", () => {
          if (TH_EL) {
            TH_EL.querySelector(GRIP_CLASS).classList.remove(
              OPTIONS.gripActiveClass
            );
            if (OPTIONS.emit) {
              emit(OPTIONS.emit, TH_EL);
            }
            TH_EL = null;
          }
        });
      },
    });
  },
};

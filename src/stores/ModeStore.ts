import type { IMode } from "@/models/mode";
import { defineStore } from "pinia";

export const useModeStore = defineStore({
    id: 'mode',
    state: (): IMode => ({
        darkmode: false,
        text: 'LightMode'
    }),
    actions: {
        cambiarModo() {
            this.darkmode = !this.darkmode;
            this.text = this.darkmode ? 'DarkMode' : 'LightMode';
        }
    }
});
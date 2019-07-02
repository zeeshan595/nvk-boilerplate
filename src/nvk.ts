import * as linuxNVK from "nvk/generated/1.1.106/linux";
import * as darwinNVK from "nvk/generated/1.1.106/darwin";
import * as win32NVK from "nvk/generated/1.1.106/win32";

let nvk: any;
switch (process.platform) {
    case "linux":
        nvk = linuxNVK;
        break;
    case "darwin":
        nvk = darwinNVK;
        break;
    case "win32":
        nvk = win32NVK;
        break;
}
Object.assign(global, nvk);
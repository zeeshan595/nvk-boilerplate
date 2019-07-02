import "./nvk";

let isRunning = true;
let win = new VulkanWindow({
  title: "Hello World",
  width: 800,
  height: 600
});
win.onclose = () => (isRunning = false);
while (isRunning) {
  win.pollEvents();
}
win.close();
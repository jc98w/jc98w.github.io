let frame = document.getElementById("video_frame");

// Set width to max size, height to 9/16 of width
frame.setAttribute("width", "100%");
let f_width = frame.getAttribute("width");
let f_height = f_width * 9 / 16;
frame.setAttribute("height", f_height);
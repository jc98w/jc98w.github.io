---
layout: default
---

# {{ page.title }}

<head>
    <script src="assets/js/video_sizer.js"></script>
</head>

<iframe
    id="video_frame"
    src={{ page.video_link }}
    title={{ page.video_title }}
    allowfullscreen>
</iframe>

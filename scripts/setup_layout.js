const posts = [
    "zig pointers", "/posts/zig_pointers.html",
];

window.onload = function() {
    let d = "";
    if (location.href.startsWith("file:///")) {
        let io_idx = location.href.indexOf(".io")
        d = location.href.slice(0, io_idx + 3);
    }

    let header = document.getElementsByTagName("header");
    if (header.length > 0) {        
        header[0].innerHTML = `
            <h1><a id="title" href="${d}/index.html">spinningmonkeyjpeg</a></h1>
        `;
    }

    let nav = document.getElementsByTagName("nav");
    if (nav.length > 0) {
        nav[0].innerHTML = `
            <a href="https://github.com/freakmangd">github</a>
            <a href="https://freakman.itch.io">itch.io</a>
        `;
    }

    let sidebar_html = "";

    sidebar_html += `
        <h3>posts</h3>
        <ul class="sidebar">
    `;

    for (let i = 0; i < posts.length; i += 2) {
        sidebar_html += `<li><a href="${d}${posts[i + 1]}">${posts[i]}</a></li>\n`;
    }

    sidebar_html += "</ul>";
    
    let sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = sidebar_html;
};
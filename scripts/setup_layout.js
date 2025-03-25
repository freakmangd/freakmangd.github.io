const posts = [
    "zig pointers", "posts/zig_pointers.html",
];

window.onload = function () {
    let fileName = location.href.split("/").slice(-1); 
    let title_link = "../index.html"
    if (fileName == "index.html") {
        title_link = "#";
    }

    let header = document.getElementsByTagName("header");
    if (header.length > 0) {        
        header[0].innerHTML = `
            <h1><a id="title" href="${title_link}">spinningmonkeyjpeg</a></h1>
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
        sidebar_html += "<li><a href=\"" + posts[i + 1] +
            "\">" + posts[i] + "</a></li>\n"
    }

    sidebar_html += "</ul>";
    
    let sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = sidebar_html;
};
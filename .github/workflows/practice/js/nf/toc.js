var contents_wrapper = document.querySelector(".contents_wrap");
var toc_wrapper = document.querySelector(".toc_wrap");

document.addEventListener("DOMContentLoaded", () => {
    let toc = '';
    let headings = contents_wrapper.querySelectorAll('H1, H2, H3');
    headings.forEach((heading) => {
        let title = heading.innerHTML;
        let tagname = heading.tagName;
        // 내부 URL 생성
        let href = encodeURI(`${tagname}-${title}`);
        heading.id = href;
        toc += `<li class="${tagname}"><a href="#${href}">${title}</a></li>`;
    });
    toc_wrapper.innerHTML = `<ul>${toc}</ul>`;
});

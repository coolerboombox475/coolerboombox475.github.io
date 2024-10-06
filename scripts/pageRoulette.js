var pages = [
    'wiki-pages/shmorpsmp/people/ivory.html',
    'wiki-pages/shmorpsmp/people/jasper.html',
    'wiki-pages/shmorpsmp/people/kit.html',
    'wiki-pages/shmorpsmp/people/zoxie.html',
    'wiki-pages/joke/beastshot.html',
    'wiki-pages/joke/the_spawn.html'
]

function randomPage() {
    var randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage;
}
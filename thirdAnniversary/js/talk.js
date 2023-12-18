new TypeIt("#wchhnl", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("HNL && WCH")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("在一起的三周年纪念日")
    .pause(3000)
    .go();

new TypeIt('#talkToHNL', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();
var page = require('webpage').create(), system = require('system');
page.settings.userAgent = system.args[2];
page.open(system.args[1], function (status) {
    if (status !== 'success') {
        phantom.exit();
    } else {
        window.setTimeout(function () {
            while(page.framesCount) page.switchToFrame(page.framesName[0]);
            console.log(page.evaluate(function()
            {
              var x=30;
              var y=30;
              var ev = document.createEvent("MouseEvent");
              var el = document.elementFromPoint(x,y);
              ev.initMouseEvent(
                  "click",
                  true, true,
                  window, 1,
                  x, y, x, y,
                  false, false, false, false,
                  0, null
              );
              el.dispatchEvent(ev);
              return el.tagName;
            }));
            
            window.setTimeout(function () {
              phantom.exit();
            }, 3000);
        }, 3000);
    }
});

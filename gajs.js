// https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            return (root.gaTrack = factory());
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals
        root.gaTrack = factory();
    }
}(this, function () {
    /**
     * Google Analytics JS v1
     * http://code.google.com/p/google-analytics-js/
     * Copyright (c) 2009 Remy Sharp remysharp.com / MIT License
     * $Date: 2009-02-25 14:25:01 +0000 (Wed, 25 Feb 2009) $
     */
    function gaTrack(urchinCode, domain, url) {
        function rand(min, max) {
            return min + Math.floor(Math.random() * (max - min));
        }
        
        if (!this.Image) return;

        var i=1000000000,
            utmn=rand(i,9999999999), //random request number
            cookie=rand(10000000,99999999), //random cookie number
            random=rand(i,2147483647), //number under 2147483647
            today=(new Date()).getTime(),
            win = this.location,
            img = new this.Image(),
            urchinUrl = 'https://www.google-analytics.com/__utm.gif?utmwv=1.3&utmn='
                +utmn+'&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt=-&utmhn='
                +domain+'&utmr='+win+'&utmp='
                +url+'&utmac='
                +urchinCode+'&utmcc=__utma%3D'
                +cookie+'.'+random+'.'+today+'.'+today+'.'
                +today+'.2%3B%2B__utmb%3D'
                +cookie+'%3B%2B__utmc%3D'
                +cookie+'%3B%2B__utmz%3D'
                +cookie+'.'+today
                +'.2.2.utmccn%3D(referral)%7Cutmcsr%3D' + win.host + '%7Cutmcct%3D' + win.pathname + '%7Cutmcmd%3Dreferral%3B%2B__utmv%3D'
                +cookie+'.-%3B';

        // trigger the tracking
        img.src = urchinUrl;
    }

    return gaTrack;
}));

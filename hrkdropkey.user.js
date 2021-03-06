// ==UserScript==
// @name         HRK tlk.io Autoref Helper
// @namespace    HRK
// @version      0.7
// @description  insert your ref link at yourref, go to https://tlk.io/hrk, enable script, let it run!
// @author       Tackyou
// @match        *tlk.io/hrk*
// @license      https://raw.githubusercontent.com/Tackyou/HRK-Drop-Key-Referral-Helper/master/LICENSE
// @supportURL   https://github.com/Tackyou/HRK-Drop-Key-Referral-Helper/issues
// @updateURL    https://raw.githubusercontent.com/Tackyou/HRK-Drop-Key-Referral-Helper/master/hrkdropkey.user.js
// @downloadURL  https://raw.githubusercontent.com/Tackyou/HRK-Drop-Key-Referral-Helper/master/hrkdropkey.user.js
// @grant        none
// ==/UserScript==

// insert your ref link here
var yourref = 'http://www.hrkgame.com/profile/referral/dropkey?ref=96dcc6a2ee97f37';
// you can change the message here, make sure you keep ' + yourref + ' included thats where your ref gets inserted in the message
var message = 'Help me: ' + yourref + ' will re-click all! -- AUTOMATIC BOT GET IT HERE: https://github.com/Tackyou/HRK-Drop-Key-Referral-Helper';
////////////////////
////////////////////
// don't touch below
// please don't alter the intervals you don't gain anything with that you just disturb people
// thanks and enjoy
console.log('[HRK tlk.io] Bot is running, please calm down and wait a moment it will start in some secs');
var data = new prepare();
$(function(){
    setTimeout(function(){letsgo(data)}, 2000);
});

$(window).unload(function() {
    data.helper.close();
});

function prepare() {
    this.helper = window.open('http://start.zro.co/','','width=15,height=15,resizable=no,status=no,toolbar=no,scrollbars=no,menubar=no,location=no');
    this.helper.blur();
    this.helper.resizeTo(0,0);
    this.helper.moveTo(window.screen.availWidth+500,0);
    window.focus();
    
    this.alreadyOpened = new Array();
    
    var data = this;
}

function letsgo(data){
    $('#message_body').val(message);
    $('form#new_message').submit();
    console.log('[HRK tlk.io] Your ref was posted in chat (if not it will be on next cycle)');
    var time = 2000;
    $('#chat dl dd a').each(function(){
        var url = $(this).attr('href');
        if($.inArray(url, data.alreadyOpened) == -1 && url.indexOf('http://www.hrkgame.com/profile/referral/dropkey?ref=') > -1){
            data.alreadyOpened.push(url);
            setTimeout( function(){
                console.log('[HRK tlk.io] Opening ... ' + url);
                data.helper.location.href = url;
            }, time);
            time += 2000;
        }
    });
    
    setTimeout(function(){letsgo(data)}, time+10000);
}

// ignore this
//var reflink = $('.col-md-8.dkrefferal p input').val();
//console.log('Your ref link:'+reflink);
//$('button.btn.active.btn-danger.btn-lg.uppercase.rfrbtn').trigger('click');

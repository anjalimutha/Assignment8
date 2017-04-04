(function() {
    'use strict';
    var App = window.App || {};
    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isSilverChallenge: function(coffee, strength) {
            if (/decaf/.test(coffee) && strength > 20) {
                return false;
            }
            return true;
        },
        isemail: function(email) {
            if (/.+@me\.com$/.test(email)) {
                db.get(email, cb);
            }
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);

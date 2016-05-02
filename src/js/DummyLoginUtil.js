/**
 * Created by Sihao on 2016/4/26.
 * TODO: didn't handle localStorage exceptions(setItem() exception when localStorage is full)
 * TODO: Add Callback functions
 */

            var DummyLoginUtil =
                function DummyLoginUtil(elements) {
                    this.elements = $(elements);
                };


            /**
             *
             * @param un input username
             * @param pw input password
             * @return true if un and pw match, false otherwise
             */
            DummyLoginUtil.prototype.validateUser = function(un, pw)
            {
                if (!localStorage.eviveUsers) return false;

                var users = JSON.parse(localStorage.eviveUsers);

                for (var i = 0; i < users.length; ++i)
                {
                    if (users[i].username === un)
                    {
                        if (users[i].password === pw)
                        {
                            return this.logOnUser(users[i]);
                        }
                    }
                }
                return false;
            };

            DummyLoginUtil.prototype.registerUser = function(newUser) {
                if (!localStorage.eviveUsers)
                    localStorage.setItem("eviveUsers", JSON.stringify([User]));
                else
                {
                    var users = JSON.parse(localStorage.eviveUsers);
                    users.push(newUser);
                    localStorage.setItem("eviveUsers", JSON.stringify(users));
                }
            };

            /**
            * Reset User Info
            */
            DummyLoginUtil.prototype.resetUserInfo = function()  {
                var admin = new EviveUser("Group4", "cs465","cs465group4@illinois.edu", "1404 Siebel Center", "Group 4", "8888888888");
                localStorage.setItem("eviveUsers", JSON.stringify([admin]));
            };

            /**
            * Log On and Log Out Operations
            */
            DummyLoginUtil.prototype.logOnUser = function(user) {
                localStorage.eviveCurUser = user.username;
                localStorage.eviveCurEmail = user.email;
                localStorage.eviveCurAddress = user.address;
                localStorage.eviveCurNickname = user.nickname;
                localStorage.eviveCurMobile = user.mobile;
                return true;
            };

            DummyLoginUtil.prototype.logOutUser = function() {
                localStorage.removeItem("eviveCurUser");
                localStorage.removeItem("eviveCurEmail");
            };





/**
 * User Class Constructor
 * @param un useranme
 * @param pw password
 * @param email user email
 * @param address user address
 * @constructor
 */
function EviveUser(un, pw, email, address, nickname, mobile)  {
    this.username = un;
    this.password = pw;
    this.email = email;
    this.address = address;
    this.nickname = nickname;
    this.mobile = mobile;
}













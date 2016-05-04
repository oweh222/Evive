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
            DummyLoginUtil.prototype.validateUser = function(un, pw) {
                if (un == "" || pw == "") return false;

                if (localStorage.eviveUsers) {
                    var users = JSON.parse(localStorage.eviveUsers);
                    for (var i = 0; i < users.length; ++i)
                        if (users[i].username === un) {
                            if (users[i].password === pw)
                                return this.logOnUser(users[i]);
                            else
                                return false;
                        }
                }

                var newUser = this.registerUser(new EviveUser(un, pw, "", "", "", ""));
                return this.logOnUser(newUser);
            };

            DummyLoginUtil.prototype.registerUser = function(newUser) {
                var users;
                if (!localStorage.eviveUsers)
                    users = [newUser];
                else {
                    users = JSON.parse(localStorage.eviveUsers);
                    users.push(newUser);
                }
                localStorage.eviveUsers = JSON.stringify(users);

                return newUser;
            };

            /**
            * Reset User Info
            */
            DummyLoginUtil.prototype.resetUserInfo = function()  {
                localStorage.removeItem("eviveUsers");

                var user = new EviveUser("Group4", "cs465","cs465group4@illinois.edu", "1404 Siebel Center", "CS 465 Group 4", "8888888888");
                return this.registerUser(user);
            };

            /**
            * Log On and Log Out Operations
            */
            DummyLoginUtil.prototype.logOnUser = function(user) {
                localStorage.eviveCurUser = user.username;
                return true;
            };

            DummyLoginUtil.prototype.logOutUser = function() {
                localStorage.removeItem("eviveCurUser");
            };

            DummyLoginUtil.prototype.currentUser = function() {
                return localStorage.eviveCurUser;
            }

            DummyLoginUtil.prototype.requestUserInfo = function() {
                var users = JSON.parse(localStorage.eviveUsers);
                var result = false;

                users.forEach(function(user, index) {
                    if (user.username == localStorage.eviveCurUser)
                        return result = {
                            email: user.email,
                            address: user.address,
                            nickname: user.nickname,
                            mobile: user.mobile
                        };
                });

                return result;
            }

            DummyLoginUtil.prototype.updateUserInfo = function(userInfo) {
                var users = JSON.parse(localStorage.eviveUsers);
                users.forEach(function(user, index) {
                    if (user.username == localStorage.eviveCurUser) {
                        user.email = userInfo.email;
                        user.address = userInfo.address;
                        user.nickname = userInfo.nickname;
                        user.mobile = userInfo.mobile;
                    }
                });
                localStorage.eviveUsers = JSON.stringify(users);
            };



/**
 * User Class Constructor
 * @param un useranme
 * @param pw password
 * @param email user email
 * @param address user address
 * @constructor
 */
function EviveUser(un, pw, email, address, nickname, mobile) {
    this.username = un;
    this.password = pw;
    this.email = email;
    this.address = address;
    this.nickname = nickname;
    this.mobile = mobile;
}

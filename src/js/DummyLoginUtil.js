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
            DummyLoginUtil.prototype.validateUser = function(un,pw)
            {
                if (!localStorage.eviveUsers) return alert("Login Failed!");

                var users = JSON.parse(localStorage.eviveUsers);

                for (var i = 0; i < users.length; ++i)
                {
                    if (users[i].username === un)
                    {
                        if (users[i].password === pw)
                        {
                            return this.logOnUser(un, users[i].email);
                        }
                    }
                }
                return alert("Login Failed!");
            };

            DummyLoginUtil.prototype.registerUser = function (newUser) {
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
                var admin = new EviveUser("Group4", "cs465","cs465group4@illinois.edu", "1404 Siebel Center" );
                localStorage.setItem("eviveUsers", JSON.stringify([admin]));
            };

            /**
            * Log On and Log Out Operations
            */
            DummyLoginUtil.prototype.logOnUser = function (username, email) {
                localStorage.eviveCurUser = username;
                localStorage.eviveCurEmail = email;
                window.location = "myaccount.html";
            };

            DummyLoginUtil.prototype.logOutUser =  function() {
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
 function EviveUser(un, pw, email, address)  {
    this.username = un;
    this.password = pw;
    this.email = email;
    this.address = address;
}













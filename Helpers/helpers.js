/**
 * This file contains all helper methods global
 * to the application. Feel free to add extra helper
 * definition within the body of this file.
 */

const {normalize} = require("path");
const fs = require("fs");

module.exports.initializeHelpers = async function () {

    /**
     * Autoloads any given set of files from within a certain path.
     * @param path
     */
    autoload = function (path) {
        path = normalize(path);
        fs.readdirSync(path).forEach(function(file){
            let result = file.match("\.js$");
            if(result){
                console.log(file);
            }
        });

    };

    /**
     * Returns the config directory path.
     * @returns {string}
     */
    configDir = function () {
        return normalize(process.env.APP_PATH + "/Config");
    }

    /**
     * Returns the Middleware Directory.
     * @returns {string}
     */
    middlewareDir = function(){
        return normalize(process.env.APP_PATH + "/Middleware");
    }

    /**
     * Returns the Route Middleware Directory.
     * @returns {string}
     */
    routeMiddlewareDir = function(){
        return normalize(middlewareDir() + "/RouteMiddleware");
    }

    /**
     * Gets the value of an environment variable key.
     * @param key An environment variable key name.
     * @returns {{readonly APP_PATH?: string; readonly PORT?: string; readonly DB_URL?: string; readonly APP_NAME?: string; readonly DB_NAME?: string; readonly APP_URL?: string; readonly PATH?: string; readonly LC_MEASUREMENT?: string; readonly XAUTHORITY?: string; readonly XMODIFIERS?: string; readonly LC_TELEPHONE?: string; readonly XDG_DATA_DIRS?: string; readonly GDMSESSION?: string; readonly MANDATORY_PATH?: string; readonly LC_TIME?: string; readonly TEXTDOMAINDIR?: string; readonly GTK_IM_MODULE?: string; readonly DBUS_SESSION_BUS_ADDRESS?: string; readonly DEFAULTS_PATH?: string; readonly XDG_CURRENT_DESKTOP?: string; readonly SSH_AGENT_PID?: string; readonly QT4_IM_MODULE?: string; readonly LC_PAPER?: string; readonly SESSION_MANAGER?: string; readonly USERNAME?: string; readonly LOGNAME?: string; readonly PWD?: string; readonly IM_CONFIG_PHASE?: string; readonly S_COLORS?: string; readonly GJS_DEBUG_TOPICS?: string; readonly SHELL?: string; readonly LC_ADDRESS?: string; readonly GIO_LAUNCHED_DESKTOP_FILE?: string; readonly OLDPWD?: string; readonly GNOME_DESKTOP_SESSION_ID?: string; readonly GTK_MODULES?: string; readonly CLUTTER_IM_MODULE?: string; readonly TEXTDOMAIN?: string; readonly XDG_SESSION_DESKTOP?: string; readonly SHLVL?: string; readonly LC_IDENTIFICATION?: string; readonly LC_MONETARY?: string; readonly QT_IM_MODULE?: string; readonly XDG_CONFIG_DIRS?: string; readonly LANG?: string; readonly XDG_SESSION_ID?: string; readonly XDG_SESSION_TYPE?: string; readonly DISPLAY?: string; readonly LC_NAME?: string; readonly GPG_AGENT_INFO?: string; readonly DESKTOP_SESSION?: string; readonly USER?: string; readonly XDG_MENU_PREFIX?: string; readonly GIO_LAUNCHED_DESKTOP_FILE_PID?: string; readonly QT_ACCESSIBILITY?: string; readonly WINDOWPATH?: string; readonly LC_NUMERIC?: string; readonly GJS_DEBUG_OUTPUT?: string; readonly SSH_AUTH_SOCK?: string; readonly XDG_SEAT?: string; readonly GNOME_SHELL_SESSION_MODE?: string; readonly XDG_VTNR?: string; readonly XDG_RUNTIME_DIR?: string; readonly HOME?: string; [p: string]: string}|string}
     */
    env = function(key){
        if(key === undefined){
            return process.env;
        } else {
            return process.env[key];
        }
    }
};

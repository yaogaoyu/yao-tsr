/**
 * 定义设备信息组件。
 *
 * @author    姚尧 <yaogaoyu@qq.com>
 * @copyright © 2016 Yao
 * @license   GPL-3.0
 * @file      Util/Device.ts
 */

namespace Util {

    export namespace Device {
        /**
         * 获取设备是否PC端
         */
        export function isPC(): boolean {
            // var screenHeight: number = screen.height;
            // var screenWidth: number = screen.width;
            // return screenHeight < screenWidth;
            var ua: string = navigator.userAgent.toLowerCase(),
                pick: (pattern: RegExp) => string = (pattern: RegExp) => {
                    var match: string[] = ua.match(pattern);
                    return (match && 1 < match.length) ? match[1] : '';
                },
                ios: string = pick(/(ipod|iphone|ipad)/),
                android: boolean = /android/.test(ua) && !/like android/.test(ua),
                // tablet: boolean = /tablet/.test(ua),
                // mobile: boolean = !tablet && /[^-]mobi/.test(ua),
                mobile: boolean = /[^-]mobi/.test(ua);
                // osver: number = 0;
            // if (android) {
            //     osver = parseInt(pick(/android[ \/-](\d+(\.\d+)*)/), 10);
            // }
            // if ('ipad' == ios || (android && (3 == osver || (4 == osver && !mobile))) || /silk/.test(ua)) {
            //     tablet = true;
            // } else
            if ('ipod' == ios || 'iphone' == ios || android || /blackberry|\bbb\d+/.test(ua) || /rim\stablet/.test(ua) || /(web|hpw)os/.test(ua) || /bada/i.test(ua)) {
                mobile = true;
            }
            // return !(tablet || mobile);
            return !mobile;
        }

        /**
         * 获取IE浏览器版本号
         */
        export function ieVer(): boolean | number {
            if (!isPC()) return false;
            var browser: string = navigator.appName;
            if (browser != "Microsoft Internet Explorer") return false;
            var browserVer: string = navigator.appVersion;
            var versionStr: string = browserVer.match(/MSIE\s.*?;/i)[0].match(/\d{1,2}/i)[0];
            if (versionStr) return parseInt(versionStr, 10);
            return true;
        }

        /**
         * 获取浏览器类别
         */
        export function browserInfo(): Util.IHashTable<string> {
            let ua: string = navigator.userAgent.toLowerCase();
            let m: string[] = ua.match(/(msie|firefox|chrome|opera|version).*?([\d.]+)/);
            return {
                browser: m[1].replace(/version/, "safari"),
                ver: m[2]
            };
        }
    }
}

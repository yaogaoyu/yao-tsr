/**
 * 声明示例视图属性接口规范。
 *
 * @author    姚尧 <yaogaoyu@qq.com>
 * @copyright © 2016 Yao
 * @license   GPL-3.0
 * @file      Core/_View/_Props/IDemoProps.ts
 */

/// <reference path="../IProps.ts" />

namespace Core {
    export interface IDemoProps extends IProps {
        /**
         * 属性示例。
         */
        demoProps: string;
    }
}

/**
 * 声明示例视图状态接口规范。
 *
 * @author    姚尧 <yaogaoyu@qq.com>
 * @copyright © 2016 Yao
 * @license   GPL-3.0
 * @file      Core/_View/_State/IDemoState.ts
 */

/// <reference path="../IState.ts" />

namespace Core {
    export interface IDemoState extends IState {
        /**
         * 状态示例
         */
        demoState: string;
    }
}

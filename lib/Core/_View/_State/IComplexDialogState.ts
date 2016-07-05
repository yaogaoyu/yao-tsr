/**
 * 定义组合对话框子视图状态接口规范。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      Core/_View/_State/IComplexDialogState.ts
 */

/// <reference path="../IState.ts" />
/// <reference path="../../../../include/tsd.d.ts" />

namespace Core {
    export interface IComplexDialogState extends IState {
        /**
         * 类型。
         */
        type?: string;

        /**
         * 标题。
         */
        title?: string;

        /**
         * 内容。
         */
        form?: JSX.Element;

        /**
         * 回调函数。
         */
        callback?: () => any;

        /**
         * 是否显示。
         */
        show?: boolean;
    }
}

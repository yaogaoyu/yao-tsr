/**
 * 定义简单对话框子视图状态接口规范。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      Core/_View/_State/ISimpleDialogState.ts
 */

/// <reference path="../IState.ts" />

namespace Core {
    export interface ISimpleDialogState extends IState {
        /**
         * 消息。
         */
        message?: string;

        /**
         * 是否显示。
         */
        show?: boolean;
    }
}

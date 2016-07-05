/**
 * 声明确认对话框业务流接口规范。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      Core/_Runtime/IConfirmFlow.ts
 */

/// <reference path="IFlow.ts" />
/// <reference path="../../../include/tsd.d.ts" />

namespace Core {
    export interface IConfirmFlow extends IFlow {
        /**
         * 显示。
         */
        show(message: string): Promise<boolean>;

        /**
         * 确定。
         */
        yes(): void;

        /**
         * 取消。
         */
        no(): void;
    }
}

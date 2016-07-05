/**
 * 声明警告对话框业务流接口规范。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      Core/_Runtime/IAlertFlow.ts
 */

/// <reference path="IFlow.ts" />
/// <reference path="../../../include/tsd.d.ts" />

namespace Core {
    export interface IAlertFlow extends IFlow {
        /**
         * 显示。
         */
        show(message: string): Promise<void>;

        /**
         * 确定。
         */
        ok(): void;
    }
}

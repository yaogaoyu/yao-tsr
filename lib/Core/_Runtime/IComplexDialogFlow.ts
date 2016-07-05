/**
 * 声明组合对话框业务流接口规范。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      Core/_Runtime/IComplexDialogFlow.ts
 */

/// <reference path="IFlow.ts" />
/// <reference path="../../../include/tsd.d.ts" />

namespace Core {
    export interface IComplexDialogFlow extends IFlow {
        /**
         * 显示。
         */
        show<T>(type: string, title: string, form: JSX.Element, callback: () => T): Promise<T>;

        /**
         * 确定。
         */
        yes(handler: () => any): void;

        /**
         * 取消。
         */
        no(): void;
    }
}

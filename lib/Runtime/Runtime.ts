/**
 * 入口运行时实体。
 *
 * @author    姚尧 <yaogaoyu@qq.com>
 * @copyright © 2016 Yao
 * @license   GPL-3.0
 * @file      Runtime/Runtime.ts
 */

/// <reference path="Alert.tsx" />
/// <reference path="Confirm.tsx" />
/// <reference path="Dialog.tsx" />
/// <reference path="DemoFlow.tsx" />

namespace Runtime {
    export class Runtime {
        /**
         * 外部传入的初始化参数。
         */
        private params: Util.IHashTable<any>;
        /**
         * 构造函数。
         */
        constructor(params?: Util.IHashTable<any>) {
            this.params = params || {};
            let container: Element = document.querySelector('.main');
            /**
             * 示例
             */
            let demoFlow: Core.IDemoFlow = new DemoFlow(container);
            console.log(demoFlow);
        }
    }

    /**
     * 警告。
     */
    export function alert(message: string): Promise<void> {
        return Alert.singleton().show(message);
    }

    /**
     * 确认。
     */
    export function confirm(message: string): Promise<boolean> {
        return Confirm.singleton().show(message);
    }

    /**
     * 自定义对话框。
     */
    export function dialog<T>(type: string, title: string, form: JSX.Element, callback: () => T): Promise<T> {
        return Dialog.singleton().show(type, title, form, callback);
    }
}

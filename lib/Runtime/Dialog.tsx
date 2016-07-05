/**
 * 定义组合对话框。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      Runtime/Dialog.ts
 */

/// <reference path="Flow.ts" />
/// <reference path="../Core/_Runtime/IComplexDialogFlow.ts" />
/// <reference path="../View/_Dialog/ComplexDialog.tsx" />

namespace Runtime {
    var instance: Dialog;
    export class Dialog extends Flow implements Core.IComplexDialogFlow {
        /**
         * 视图。
         */
        protected view: View.ComplexDialog;

        /**
         * 队列。
         */
        private queue: [Promise<any>, (value: any) => void][];

        /**
         * 获取唯一实例。
         */
        public static singleton(): Dialog {
            if (!instance) {
                instance = new Dialog();
                instance.sView(React.render(<View.ComplexDialog flow={instance}/>, document.querySelector('.dialog.box')));
            }
            return instance;
        }

        /**
         * 显示。
         */
        public show<T>(type: string, title: string, form: JSX.Element, callback: () => T): Promise<T> {
            this.queue = this.queue || [];
            var q: [Promise<any>, (value: any) => void][] = this.queue,
                last: Promise<any> = q.length ?
                    q[q.length - 1][0] :
                    Promise.resolve(true),
                node: [Promise<T>, (value: T) => void] = [last.then(() => new Promise((resolve: (value: T) => void) => {
                    node[1] = resolve;
                    this.view.setState({
                        type: type,
                        title: title,
                        form: form,
                        callback: callback,
                        show: true
                    });
                })), undefined];
            this.queue.push(node);
            return node[0];
        }

        /**
         * 确定。
         */
        public yes(handler: () => any): void {
            this.queue.shift()[1](handler());
        }

        /**
         * 确定。
         */
        public no(): void {
            this.queue.shift()[1](undefined);
        }
    }
}

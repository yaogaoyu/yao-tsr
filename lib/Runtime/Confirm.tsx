/**
 * 定义确认对话框。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      Runtime/Confirm.ts
 */

/// <reference path="Flow.ts" />
/// <reference path="../Core/_Runtime/IConfirmFlow.ts" />
/// <reference path="../View/_Dialog/Confirm.tsx" />

namespace Runtime {
    var instance: Confirm;
    export class Confirm extends Flow implements Core.IConfirmFlow {
        /**
         * 视图。
         */
        protected view: View.Confirm;

        /**
         * 队列。
         */
        private queue: [Promise<boolean>, (value: boolean) => void][];

        /**
         * 获取唯一实例。
         */
        public static singleton(): Confirm {
            if (!instance) {
                instance = new Confirm();
                instance.sView(React.render(<View.Confirm flow={instance}/>, document.querySelector('.confirm.box')));
            }
            return instance;
        }

        /**
         * 显示。
         */
        public show(message: string): Promise<boolean> {
            this.queue = this.queue || [];
            var q: [Promise<boolean>, (value: boolean) => void][] = this.queue,
                last: Promise<boolean> = q.length ?
                    q[q.length - 1][0] :
                    Promise.resolve(true),
                node: [Promise<boolean>, (value: boolean) => void] = [last.then(() => new Promise((resolve: (value: boolean) => void) => {
                    node[1] = resolve;
                    this.view.setState({
                        message: message,
                        show: true
                    });
                })), undefined];
            this.queue.push(node);
            return node[0];
        }

        /**
         * 确定。
         */
        public yes(): void {
            this.queue.shift()[1](true);
        }

        /**
         * 确定。
         */
        public no(): void {
            this.queue.shift()[1](false);
        }
    }
}

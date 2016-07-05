/**
 * 定义警告对话框。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      Runtime/Alert.ts
 */

/// <reference path="Flow.ts" />
/// <reference path="../Core/_Runtime/IAlertFlow.ts" />
/// <reference path="../View/_Dialog/Alert.tsx" />

namespace Runtime {
    var instance: Alert;
    export class Alert extends Flow implements Core.IAlertFlow {
        /**
         * 视图。
         */
        protected view: View.Alert;

        /**
         * 队列。
         */
        private queue: [Promise<void>, () => void][];

        /**
         * 获取唯一实例。
         */
        public static singleton(): Alert {
            if (!instance) {
                instance = new Alert();
                instance.sView(React.render(<View.Alert flow={instance}/>, document.querySelector('.alert.box')));
            }
            return instance;
        }

        /**
         * 显示。
         */
        public show(message: string): Promise<void> {
            this.queue = this.queue || [];
            var q: [Promise<void>, () => void][] = this.queue,
                last: Promise<void> = q.length ?
                    q[q.length - 1][0] :
                    Promise.resolve(),
                node: [Promise<void>, () => void] = [last.then(() => new Promise<void>((resolve: () => void) => {
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
        public ok(): void {
            this.queue.shift()[1]();
        }
    }
}

/**
 * 示例视图实体。
 *
 * @author    姚尧 <yaogaoyu@qq.com>
 * @copyright © 2016 Yao
 * @license   GPL-3.0
 * @file      View/Demo.tsx
 */

/// <reference path="View.ts" />
/// <reference path="../Core/_View/_Props/IDemoProps.ts" />
/// <reference path="../Core/_View/_State/IDemoState.ts" />

namespace View {
    export class Demo extends View<Core.IDemoProps, Core.IDemoState> {
        constructor(props: Core.IDemoProps) {
            super(props);
            // 初始化示例状态
            this.state = {
                demoState: "demoState"
            };
        }

        public render(): JSX.Element {
            return <div>
                <p><h1>Demo</h1></p>
                <p><h1>{this.state.demoState}</h1></p>
            </div>;
        }
    }
}

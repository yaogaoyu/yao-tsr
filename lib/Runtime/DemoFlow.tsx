/**
 * 示例组件。
 *
 * @author    姚尧 <yaogaoyu@qq.com>
 * @copyright © 2016 Yao
 * @license   GPL-3.0
 * @file      Runtime/DemoFlow.tsx
 */

/// <reference path="Flow.ts" />
/// <reference path="../Core/_Runtime/IDemoFlow.ts" />
/// <reference path="../View/Demo.tsx" />

namespace Runtime {
    export class DemoFlow extends Flow implements Core.IDemoFlow {
        /**
         * 构造函数。
         */
        constructor(container: Element) {
            super();
            this.view = React.render<Core.IDemoProps, Core.IDemoState>(<View.Demo flow={this} demoProps=""/>, container) as Core.IView;
        }
    }
}

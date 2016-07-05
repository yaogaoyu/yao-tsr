/**
 * 定义视图抽象组件。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      View/View.ts
 */

/// <reference path="../../include/react/react-global.d.ts" />
/// <reference path="../Core/_View/IView.ts" />

namespace View {
    export class View<P extends Core.IProps, S extends Core.IState> extends React.Component<P, S> implements Core.IView {
    }
}

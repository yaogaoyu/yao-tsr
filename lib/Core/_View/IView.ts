/**
 * 声明视图规范。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      Core/_View/IView.ts
 */

/// <reference path="../../Util/IHashTable.ts" />
/// <reference path="../../../include/react/react-global.d.ts" />
/// <reference path="IState.ts" />
/// <reference path="IProps.ts" />
/// <reference path="../_Runtime/IFlow.ts" />

namespace Core {
    export interface IView extends React.Component<IProps, IState> {
    }
}

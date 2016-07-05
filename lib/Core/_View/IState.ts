/**
 * 声明视图状态接口规范。
 *
 * @author    姚尧 <yaogaoyu@qq.com>
 * @copyright © 2016 Yao
 * @license   GPL-3.0
 * @file      Core/_View/IState.ts
 */

/// <reference path="../../Util/IHashTable.ts" />

namespace Core {
    export interface IState extends Util.IHashTable<any> {
    }
}

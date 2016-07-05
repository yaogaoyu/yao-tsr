/**
 * 声明组合对话框子视图属性接口规范。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      Core/_View/_Props/IComplexDialogProps.ts
 */

/// <reference path="../IProps.ts" />
/// <reference path="../../_Runtime/IComplexDialogFlow.ts" />

namespace Core {
    export interface IComplexDialogProps extends IProps {
        /**
         * 关联业务流。
         */
        flow: IComplexDialogFlow;
    }
}

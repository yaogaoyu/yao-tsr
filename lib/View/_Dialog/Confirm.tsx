/**
 * 定义确认对话框子视图。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      View/_PC/_Dialog/Confirm.tsx
 */

/// <reference path="../View.ts" />
/// <reference path="../../Core/_View/_Props/IConfirmDialogProps.ts" />
/// <reference path="../../Core/_View/_State/ISimpleDialogState.ts" />

namespace View {
    export class Confirm extends View<Core.IConfirmDialogProps, Core.ISimpleDialogState> {
        constructor(props: Core.IConfirmDialogProps) {
            super(props);
            this.state = {
                message: '',
                show: false
            };
        }

        public render(): JSX.Element {
            var state: Core.ISimpleDialogState = this.state;
            return <div className={(this.state.show ? '' : 'hidden ') + 'confirm'}>
                <div className="mask"></div>
                <div className="dialog">
                    <div className="wrapper">
                        <div className="header">
                            <span className="icon icon-warning2"></span>
                            <span className="title">{state.message}</span>
                        </div>
                        <div className="footer">
                            <a className="hilite solid button" href="#" onClick={(ev: React.MouseEvent) => this._yes(ev) }>确定</a>
                            <a className="solid button" href="#" onClick={(ev: React.MouseEvent) => this._no(ev) }>取消</a>
                        </div>
                    </div>
                </div>
            </div>;
        }

        /**
         * 确定。
         */
        private _yes(event: React.MouseEvent): void {
            event.preventDefault();
            this.setState({
                message: null,
                show: false
            });
            this.props.flow.yes();
        }

        /**
         * 取消。
         */
        private _no(event: React.MouseEvent): void {
            event.preventDefault();
            this.setState({
                message: null,
                show: false
            });
            this.props.flow.no();
        }
    }
}

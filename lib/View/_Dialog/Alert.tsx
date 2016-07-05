/**
 * 定义警告对话框子视图。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      View/_PC/_Dialog/Alert.tsx
 */

/// <reference path="../View.ts" />
/// <reference path="../../Core/_View/_Props/IAlertDialogProps.ts" />
/// <reference path="../../Core/_View/_State/ISimpleDialogState.ts" />

namespace View {
    export class Alert extends View<Core.IAlertDialogProps, Core.ISimpleDialogState> {
        constructor(props: Core.IAlertDialogProps) {
            super(props);
            this.state = {
                message: '',
                show: false
            };
        }

        public render(): JSX.Element {
            var state: Core.ISimpleDialogState = this.state;
            return <div className={(this.state.show ? '' : 'hidden ') + 'alert'}>
                <div className="mask"></div>
                <div className="dialog">
                    <div className="wrapper">
                        <div className="header">
                            <span className="icon icon-warning2"></span>
                            <span className="title">{state.message}</span>
                        </div>
                        <div className="footer">
                            <a className="hilite solid button" href="#" onClick={(ev: React.MouseEvent) => this._ok(ev)}>确定</a>
                        </div>
                    </div>
                </div>
            </div>;
        }

        private _ok(event: React.MouseEvent): void {
            event.preventDefault();
            this.setState({
                message: null,
                show: false
            });
            this.props.flow.ok();
        }
    }
}

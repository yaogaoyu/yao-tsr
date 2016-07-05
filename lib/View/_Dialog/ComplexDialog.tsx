/**
 * 定义组合对话框子视图。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      View/_PC/_Dialog/ComplexDialog.tsx
 */

/// <reference path="../View.ts" />
/// <reference path="../../Core/_View/_Props/IComplexDialogProps.ts" />
/// <reference path="../../Core/_View/_State/IComplexDialogState.ts" />

namespace View {
    export class ComplexDialog extends View<Core.IComplexDialogProps, Core.IComplexDialogState> {
        constructor(props: Core.IComplexDialogProps) {
            super(props);
            this.state = {
                show: false
            };
        }

        public render(): JSX.Element {
            var state: Core.IComplexDialogState = this.state;
            return <div className={(state.show ? '' : 'hidden ') + 'complex ' + state.type}>
                <div className="mask"></div>
                <div className="dialog">
                    <div className="wrapper">
                        <div className="header">
                            <span className="title">{state.title}</span>
                        </div>
                        <div className="body">
                            {state.form}
                        </div>
                        <div className="footer">
                            <a className="hilite solid button" href="#" onClick={(ev: React.MouseEvent) => this._yes(ev) }>确定</a>
                            <a className="solid button" href="#" onClick={(ev: React.MouseEvent) => this._no(ev)}>取消</a>
                            </div>
                        </div>
                    </div>
                </div>;
        }

        private _yes(event: React.MouseEvent): void {
            event.preventDefault();
            this.setState({
                type: '',
                title: '',
                form: null,
                callback: null,
                show: false
            });
            this.props.flow.yes(this.state.callback);
        }

        private _no(event: React.MouseEvent): void {
            event.preventDefault();
            this.setState({
                type: '',
                title: '',
                form: null,
                callback: null,
                show: false
            });
            this.props.flow.no();
        }
    }
}

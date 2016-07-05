/**
 * 总入口类。
 *
 * @author    姚尧 <yaogaoyu@qq.com>
 * @copyright © 2016 Yao
 * @license   GPL-3.0
 * @file      Online.ts
 */

/// <reference path="Runtime/Runtime.ts" />
/// <reference path="Util/_iterator.ts" />

class Main {
    public static version: string = "${VERSION}";
    private runtime: Runtime.Runtime;

    /**
     * 构造函数。
     */
    constructor(params?: Util.IHashTable<any>) {
        this.runtime = new Runtime.Runtime(params);
    }
}

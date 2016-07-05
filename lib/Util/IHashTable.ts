/**
 * 声明哈希表接口规范。
 *
 * @author    郑煜宇 <zsnakevil@gmail.com>
 * @copyright © 2016 Snakevil
 * @license   GPL-3.0
 * @file      Util/IHashTable.ts
 */

namespace Util {
    export interface IHashTable<T> {
        [index: string]: T;
    }
}
